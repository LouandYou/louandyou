import { DynamicComponent } from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

import styles from "./PageSection.module.scss";

const variants = {
  white: {
    className: styles.white,
  },
  white2: {
    className: styles.white2,
  },
  gradient: {
    className: styles.gradient,
  },
  headline: {
    className: styles.headline,
  },
};

export const PageSection = ({ blok }) => {
  const { className, props } = variants[blok.config || "white"] || {};

  return (
    <section
      {...sbEditable(blok as any)}
      {...props}
      id={blok.id || blok._uid}
      key={blok.id || blok._uid}
      className={`${styles.container} ${className}`}
    >
      <div
        className={
          className === styles.white || styles.gradient ? `content` : ""
        }
        style={{ zIndex: 2, maxWidth: "100%" }}
      >
        {blok.body
          ? blok.body.map((blok) => (
              <DynamicComponent blok={blok} key={blok._editable} />
            ))
          : null}
      </div>
    </section>
  );
};
