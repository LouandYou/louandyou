import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import { render } from "storyblok-rich-text-react-renderer";

export const Text = ({ blok, attribute = "body" }) => {
  return (
    <div className="content" {...sbEditable(blok)} key={blok.uuid || blok._uid}>
      {render(blok[attribute])}
    </div>
  );
};
