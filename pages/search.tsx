import React, { useEffect, useState } from "react";

import styles from "./search.module.scss";
import { pageGetPropsLayoutOnly } from "../src/lib/pageGetStaticProps";
import { useRouter } from "next/dist/client/router";

const queryStories = (query: string, locale: string) => fetch("/api/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ query, language: locale })
}).then(res => res.json())
  .then(({ data }) => {
    return data.reduce((stories, story) => stories.concat({
      ...story,
      matches: trimMatches(query, getMatches(query, story.content))
    }), []);
  })

// Recursively walk through the story contents and extract any
// content nodes that match the original text query
const getMatches = (query: string, story: any) => {
  if(!story) return [];
  return Object.keys(story).reduce<string[]>((matches, key) => {
    const node = story[key];
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
const maxLength = 100;
const trimMatches = (query: string, matches: string[]) => {
  let length = 0;
  let results: string[] = []
  for (let match of matches) {
    length += match.length;
    if (length > maxLength) {
      if (results.length === 0) {
        // If the first match is too long, we cut out the section that contains
        // the query match
        // e.g. "[cut-off] words before the [match] words after the match [cut-off]"
        const queryMatchIndex = match.toLowerCase().indexOf(query.toLowerCase())
        results.push(match.substring(queryMatchIndex - maxLength/2, queryMatchIndex + maxLength /2 - query.length));
      } else {
        break
      }
    } else {
      results.push(match)
    }
  }
  return results;
};

const Highlight = ({ text, query }: { text: string, query: string }) => {
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <span>
      ...{parts.map((part, i) => (
        <span key={i} className={part.toLowerCase() === query.toLowerCase() ? "has-text-weight-bold" : ""}>
          {part}
        </span>
      ))}...
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
      queryStories(query, props.locale).then(stories => {
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
    <div className={`${styles.container} mb-6`}>
      <div  className={`${styles.searchContainer} control has-icons-right mt-6`}>
        <input className="input is-rounded" placeholder="search" value={searchInput}
               onChange={(event => setSearchInput(event.target.value))}
               onKeyPress={(event) => {
                 if (event.key === "Enter") {
                   onQuery();
                 }
               }}
        />
      </div>
      <div className="control has-icons-right mt-3">
        {results.map(story => (
          <div className="mt-5" key={story.id}>
            <h3 className="has-text-weight-bold	">{story.name}</h3>
            <p className="mt-1">{story.matches.map(match => <Highlight key={match} query={query} text={match}/>)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(props) {
  return await pageGetPropsLayoutOnly(props);
}
