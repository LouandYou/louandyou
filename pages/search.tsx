/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

import styles from "./search.module.scss";
import { pageGetPropsLayoutOnly } from "../src/lib/pageGetStaticProps";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Loader from "../src/components/static/Popups/Loader";

const queryStories = (query: string, locale: string) =>
  fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, language: locale }),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data
        .reduce(
          (stories, story) =>
            stories.concat({
              ...story,
              matches: trimMatches(query, getMatches(query, story.content)),
            }),
          []
        ) // Filter out document keys irrelevant to the search
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

    if (typeof node === "string") {
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
const maxLength = 150;
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
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [results, setResults] = useState<any[]>([]);
  const { content } = props.layoutStory;

  // assign to slug translated name
  const pages = {
    result: content.result,
    settings: content.settings,
    domestic_general: content.domestic_page,
    sexual_general: content.sexual_page,
    safety_tips: content.safety_page,
    faq: "FAQ",
    accessibility: content.accessibility,
    imprint: content.imprint,
    data_protection: content.data,
    bylaws: content.bylaws,
    disclaimer_of_liability: content.disclaimer,
    donate: content.donate,
    join_us: content.join_us,
    press: content.press,
    team: content.team,
    better_together: content.better_together,
    impact: content.impact,
    meet_lou: content.meet_lou,
    what_we_do: content.what_we_do,
  };

  useEffect(() => {
    if (query) {
      setIsSearching(true);
      setSearchInput(query);
      queryStories(query, props.locale)
        .then((stories) => {
          if (stories.length === 0) {
            router.push("/not_found");
          } else {
            setResults(stories);
            setIsSearching(false);
          }
        })
        .catch(() => {
          router.push("/not_found");
        });
    }
  }, [props.locale, query, router]);

  const onQuery = () => {
    if (searchInput.length > 0) {
      router.push(`/search?q=${searchInput}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        {!isSearching && (
          <h2 className="is-hidden-mobile">
            {content.search_results_for} "{query}"
          </h2>
        )}
        <div id="search" className="control has-icons-right">
          <input
            className="input is-rounded"
            placeholder="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                onQuery();
              }
            }}
          />
          <span style={{ zIndex: 0 }} className="icon is-right">
            <i
              onClick={() => {
                onQuery();
              }}
              className="fas fa-envelope is-clickable"
            >
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </span>
        </div>
      </div>
      {isSearching ? (
        <Loader />
      ) : (
        <div className={`has-icons-right ${styles.searchResults}`}>
          {results.map((story) => (
            <div
              onClick={() => router.push(story.full_slug)}
              style={{ marginTop: "50px", overflowWrap: "anywhere" }}
              className={`is-clickable`}
              key={story.id}
            >
              <h3>{pages[story.name] || story.name}</h3>
              <p className={`${styles.itemBody} mt-4`}>
                {story.matches.map((match) => (
                  <Highlight key={match} query={query} text={match} />
                ))}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export async function getStaticProps(props) {
  return await pageGetPropsLayoutOnly(props);
}
