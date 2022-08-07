import { DynamicComponent } from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import { StoryData } from "storyblok-js-client";

import styles from "./PageContent.module.scss";

type PageSectionProps = {
  blok: StoryData<any>;
  name: string;
};


export const PageContent = ({ blok, name }: PageSectionProps) => {
  const body = blok[name];
  const headlines = body
    .filter(({ component, headline }) => component === "section" && !!headline)
    .map(({ headline }) => headline);

  const showIndex = false;

  return (<div>
      {
        showIndex && <div className={`${styles.sideScroll} is-desktop`}>
          <h3>Overview</h3>
          <ul>
            {headlines.map((headline, index) => <li key={index}>{headline}</li>)}
          </ul>
        </div>
      }
      <div {...sbEditable(blok as any)} key={blok.uuid}>
        {blok[name]
          ? blok[name].map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
          : null}
      </div>
    </div>
  );
};
