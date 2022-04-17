import React, { useEffect, useState } from "react";

import styles from "./search.module.scss";
import { pageGetPropsLayoutOnly } from "../src/lib/pageGetStaticProps";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const queryStories = (query: string, locale: string) =>
  fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, language: locale })
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data.reduce(
        (stories, story) =>
          stories.concat({
            ...story,
            matches: trimMatches(query, getMatches(query, story.content))
          }),
        []
      )// Filter out document keys irrelevant to the search
        .filter((story) => story.matches.length > 0);
    });

// Recursively walk through the story contents and extract any
// content nodes that match the original text query
const nonSearchableKeys = ["_uid", "_editable", "id", "href", "component"];
const getMatches = (query: string, story: any) => {
  if (!story) return [];
  return Object.keys(story).reduce<string[]>((matches, key) => {
    const node = story[key];
    if (nonSearchableKeys.indexOf(key) > -1) return matches;

    if (
      typeof node === "string"
    ) {
      if (node.toLowerCase().includes(query.toLowerCase())) {
        matches.push(node);
      }
    } else if (Array.isArray(node)) {
      for (const child of node) {
        matches.push(...getMatches(query, child));
      }
    } else if (typeof node === "object") {
      matches.push(...getMatches(query, node));
    }
    return matches;
  }, []);
};

// Limit the total character length of the search result
const maxLength = 100;
const trimMatches = (query: string, matches: string[]) => {
  let length = 0;
  let results: string[] = [];
  for (let match of matches) {
    length += match.length;
    if (length > maxLength) {
      if (results.length === 0) {
        // If the first match is too long, we cut out the section that contains
        // the query match
        // e.g. "[cut-off] words before the [match] words after the match [cut-off]"
        const queryMatchIndex = match
          .toLowerCase()
          .indexOf(query.toLowerCase());
        results.push(
          match.substring(
            queryMatchIndex - maxLength / 2,
            queryMatchIndex + maxLength / 2 - query.length
          )
        );
      } else {
        break;
      }
    } else {
      results.push(match);
    }
  }
  return results;
};

const Highlight = ({ text, query }: { text: string; query: string }) => {
  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return (
    <span>
      ...
      {parts.map((part, i) => (
        <span
          key={i}
          className={
            part.toLowerCase() === query.toLowerCase()
              ? "has-text-weight-bold"
              : ""
          }
        >
          {part}
        </span>
      ))}
      ...
    </span>
  );
};

export default function SearchPage({ stories, ...props }) {
  let router = useRouter();
  let { q } = router.query;
  const query: string = !!q ? String(q) : "";
  const [searchInput, setSearchInput] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      setSearchInput(query);
      queryStories(query, props.locale).then((stories) => {
        setResults(stories);
      });
    }
  }, [props.locale, query]);

  const onQuery = () => {
    if (searchInput.length > 0) {
      router.push(`/search?q=${searchInput}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.searchContainer} control has-icons-right`}>
        <input
          style={{ height: "50px", borderWidth: "2px" }}
          className="input is-rounded is-dark"
          placeholder="search"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onQuery();
            }
          }}
        />
        <span
          style={{ zIndex: 0 }}
          className="icon is-small is-right is-clickable "
          onClick={() => {
            onQuery();
          }}
        >
          <FontAwesomeIcon color="#363636" icon={faSearch} />
        </span>
      </div>
      <div className="control has-icons-right mt-4">
        {results.length > 0 && (
          <p>
            Ich habe <b>{results.length}</b> Ergebnisse gefunden.
          </p>
        )}
        {results.map((story) => (
          <>
            <div
              onClick={() => router.push(story.full_slug)}
              style={{ marginTop: "50px", overflowWrap: "anywhere" }}
              className="is-clickable"
              key={story.id}
            >
              <h3>{story.name}</h3>
              <p style={{ lineHeight: "30px" }} className="mt-2">
                {story.matches.map((match) => (
                  <Highlight key={match} query={query} text={match} />
                ))}
              </p>
            </div>
          </>
        ))}
        {results.length === 0 && (
          <p style={{ marginTop: "110px" }}>
            Leider habe ich noch keine Artikel gefunden, die zu deinem
            Suchbegriff passen. Ich würde mich freuen, wenn du mir kurz über
            das Feedback-Formular mitteilst, was du hier noch nicht finden
            konntest. Dann kann ich es auf meine Liste mit Themen setzen, die
            ich dir bald zur Verfügung stellen will.
          </p>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps(props) {
  return await pageGetPropsLayoutOnly(props);
}
