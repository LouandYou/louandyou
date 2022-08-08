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
  warning: {
    className: styles.warning,
  },
};

export const PageSection = ({ blok, headlines }) => {
  const { className, props } = variants[blok.config || "white"] || {};
  const showIndex = false;

  return (
    <section
      {...sbEditable(blok as any)}
      {...props}
      id={blok.id || blok._uid}
      key={blok.id || blok._uid}
      className={`${styles.container} ${className}`}
    >
      {className === styles.white && (
        <div className={`${styles.sideScroll} is-desktop content`}>
          <h3>Quick Links</h3>
          <ul>
            {headlines.map((headline, index) => (
              <a
                className={`${
                  headline.id.charAt(9) === blok.id.charAt(8) && styles.primary
                }`}
                key={index}
                href={`#${headline.id}`}
              >
                <li>{headline.headline}</li>
              </a>
            ))}
          </ul>
        </div>
      )}
      <div
        className={
          className === styles.white || styles.gradient ? `content` : ""
        }
        style={{ zIndex: 2, maxWidth: "100%" }}
      >
        {blok.body
          ? blok.body.map((blok) => (
              <DynamicComponent
                headlines={headlines}
                blok={blok}
                key={blok._editable}
              />
            ))
          : null}
      </div>
    </section>
  );
};
