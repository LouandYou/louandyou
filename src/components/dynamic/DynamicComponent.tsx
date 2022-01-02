import { Placeholder } from "./Placeholder";
import { Text } from "./Text";

const Components = {
  "text": Text
};

export const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};
