import { Placeholder } from "./Placeholder";
import { Text } from "./Text";
import { PageSection } from "./PageSection";

const Components = {
  "text": Text,
  "section": PageSection,
};

export const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};
