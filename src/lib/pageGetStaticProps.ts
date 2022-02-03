import { Storyblok } from "./storyblok";

export const pageGetStaticProps = async ({
                                       slug,
                                       locale,
                                       locales,
                                       defaultLocale,
                                       preview = false
                                     }) => {
  let sbParams: any = {
    version: "draft",
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    language: locale
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      preview,
      locale,
      locales,
      defaultLocale
    },
    revalidate: 3600 // revalidate every hour
  };
};
