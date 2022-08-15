import { DynamicComponent } from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import { StoryData } from "storyblok-js-client";

type PageSectionProps = {
  blok: StoryData<any>;
  name: string;
};

export const PageContent = ({ blok, name }: PageSectionProps) => {
  const body = blok[name];

  // *Side navigation*
  // Creates an array of the headlines from the "body" section and passed them as props to the individual sections
  const headlines =
    body &&
    body
      .filter(
        ({ component, headline }) => component === "section" && !!headline
      )
      .map((headline) => ({ headline: headline.headline, id: headline.id }));

  return (
    <div>
      <div {...sbEditable(blok as any)} key={blok.uuid}>
        {blok[name]
          ? blok[name].map((blok) => (
              <DynamicComponent
                headlines={headlines}
                blok={blok}
                key={blok._uid}
              />
            ))
          : null}
      </div>
    </div>
  );
};
