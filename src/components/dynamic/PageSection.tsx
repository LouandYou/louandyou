import { DynamicComponent } from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

import styles from "./PageSection.module.scss";

const variants = {
  white: {
    className: styles.white,
    props: {
      "data-dark-bg": false
    }
  }
};

export const PageSection = ({ blok }) => {
  const { className, props } = variants[blok.config || "white"] || {};
  return (
    <section {...sbEditable(blok as any)} {...props} id={blok._uid} key={blok._uid}
             className={`${styles.container} ${className}`}>
      {blok.body
        ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
        : null}
    </section>
  );
};
