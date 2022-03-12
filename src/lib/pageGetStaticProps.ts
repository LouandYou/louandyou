import { Storyblok } from "./storyblok";

export const pageGetStaticProps = async ({
                                           slug,
                                           locale,
                                           locales,
                                           defaultLocale,
                                           preview = false,
                                           withLayout = true
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
      layoutStory: withLayout ? await loadLayoutStory({locale, preview}) : false,
      preview,
      locale,
      locales,
      defaultLocale
    },
    revalidate: 3600 // revalidate every hour
  };
};

export const loadLayoutStory = async ({
  locale,
  preview = false}) => {
  let sbParams: any = {
    version: "draft",
    language: locale
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/layout`, sbParams);

  return data ? data.story : false;
}
