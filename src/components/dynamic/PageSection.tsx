import { DynamicComponent } from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import { StoryData } from "storyblok-js-client";

type PageSectionProps = {
  blok: StoryData<any>;
  name: string;
};

export const PageSection = ({ blok, name }: PageSectionProps) => (
  <main {...sbEditable(blok)} key={blok.uuid}>
    {blok[name]
      ? blok[name].map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))
      : null}
  </main>
);
