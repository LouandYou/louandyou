import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { PageContent } from "../src/components/dynamic";

export default function Page({ story }) {
  const { content } = story;
  return (
    <>
      <PageContent blok={content} name={"section_1"} />
      <PageContent blok={content} name={"body"} />
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "safety_tips",
  });
}
