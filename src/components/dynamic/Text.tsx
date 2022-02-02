import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import { render } from "storyblok-rich-text-react-renderer";

export const Text = ({ blok, attribute = 'body' }) => {
  return (
    <div {...sbEditable(blok)} key={blok.uuid || blok._uid} >
      <div className="container mx-auto py-12">{render(blok[attribute])}</div>
    </div>
  );
};

