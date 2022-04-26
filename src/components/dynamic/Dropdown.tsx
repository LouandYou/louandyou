import { Dropdown as StaticDropdown } from "../static";
import { Text } from "../../../src/components/dynamic";

export const Dropdown = ({ blok }) => {
  const { label, content } = blok;
  return (
    <StaticDropdown
      content={<Text blok={blok} attribute={"content"} />}
      label={label}
    />
  );
};
