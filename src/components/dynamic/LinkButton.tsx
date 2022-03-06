import { LinkButton as StaticLinkButton } from "../static";

export const LinkButton = ({ blok }) => {
  const { link, text, config } = blok;
  return <StaticLinkButton href={link.cached_url} variant={config}>{text}</StaticLinkButton>;
};
