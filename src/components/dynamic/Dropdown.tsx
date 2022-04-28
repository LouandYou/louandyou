import { Dropdown as StaticDropdown } from "../static";
import { Text } from "./Text";

export const Dropdown = ({ blok }) => {
  const { label } = blok;
  return (
    <StaticDropdown
      content={<Text blok={blok} attribute={"content"} />}
      label={label}
    />
  );
};
