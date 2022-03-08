import { Placeholder } from "./Placeholder";
import { Text } from "./Text";
import { PageSection } from "./PageSection";
import { LinkButton } from "./LinkButton";
import { Dropdown } from "./Dropdown";

const Components = {
  text: Text,
  section: PageSection,
  LinkButton: LinkButton,
  Dropdown: Dropdown,
};

export const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};
