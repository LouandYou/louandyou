import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import { render } from "storyblok-rich-text-react-renderer";

export const Text = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} key={blok.uuid} >
      <div className="container mx-auto py-12">{render(blok.body)}</div>
    </div>
  );
};

