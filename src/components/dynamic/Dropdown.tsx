import { Dropdown as StaticDropdown } from "../static";

export const Dropdown = ({ blok }) => {
  const { label, content } = blok;
  return <StaticDropdown content={content} label={label} />;
};
