import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import { render } from "storyblok-rich-text-react-renderer";
import styles from "./PageSection.module.scss";

export const Text = ({ blok, attribute = "body" }) => {
  return (
    <div
      {...sbEditable(blok)}
      key={blok.uuid || blok._uid}
      className={styles.text}
    >
      {render(blok[attribute])}
    </div>
  );
};
