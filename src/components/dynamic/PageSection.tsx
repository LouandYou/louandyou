import { DynamicComponent } from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

import styles from "./PageSection.module.scss";
import Blobs from "../static/Popups/Blobs";

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
        className={className === styles.white || styles.white2 ? `content` : ""}
        style={{ zIndex: 2 }}
      >
        {blok.body
          ? blok.body.map((blok) => (
              <DynamicComponent blok={blok} key={blok._editable} />
            ))
          : null}
      </div>
      {className === styles.headline && <Blobs />}
    </section>
  );
};
