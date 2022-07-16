/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import styles from "./search.module.scss";
import { pageGetPropsLayoutOnly } from "../src/lib/pageGetStaticProps";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Feedback } from "../src/components/static/Popups/Feedback";
import { Text } from "../src/components/dynamic";

export default function SearchPage({ stories, ...props }) {
  let router = useRouter();
  const [searchInput, setSearchInput] = useState<string>("");
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);
  const { content } = props.layoutStory;

  const search = () => {
    if (searchInput.length > 0) {
      router.push(`/search?q=${searchInput}`);
    }
  };

  return (
    <div className={`${styles.container} ${styles.notFound}`}>
      <div style={{ width: "100%" }} className="is-flex is-justify-content-end">
        <div id="search" className="control has-icons-right">
          <input
            className="input is-rounded"
            placeholder="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
          />
          <span style={{ zIndex: 0 }} className="icon is-right">
            <i
              onClick={() => {
                search();
              }}
              className="fas fa-envelope is-clickable"
            >
              <FontAwesomeIcon color="white" icon={faSearch} />
            </i>
          </span>
        </div>
      </div>
      <div className={styles.text_container}>
        <h2>{content.search_notFound_1}</h2>
        <br />
        <p>
          {content.search_notFound_2}{" "}
          <u
            className="is-clickable"
            onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
          >
            {content.search_notFound_3}
          </u>{" "}
          <Text blok={content} attribute={"search_notFound_4"} />
        </p>
      </div>
      {isFeedbackOpen && (
        <Feedback
          darkBackground={true}
          content={content}
          onClose={() => setIsFeedbackOpen(!isFeedbackOpen)}
        />
      )}
    </div>
  );
}

export async function getStaticProps(props) {
  return await pageGetPropsLayoutOnly(props);
}
