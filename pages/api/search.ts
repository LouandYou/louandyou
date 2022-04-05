import { Storyblok } from "../../src/lib/storyblok";

export default async function search(req, res) {
  const { query, language } = req.body;

  if (!query) {
    return res.status(200).json({
      data: []
    });
  }

  console.debug("query", query);
  const params = {
    version: "draft",
    search_term: query,
    language: language || "en"
  };

  try {
    const stories = await Storyblok.get("cdn/stories", params)
      .then(({ data }) => {
        console.debug("data", data);
        return data.stories
          // Filter out the layout story
          .filter(story => story.name !== 'layout')
          .map(({ content, name, path }) => ({ content, name, path }));
      });

    return res.status(200).json({
      data: stories
    });

  } catch (error) {
    return res.status(500).json({
      error
    });
  }
}
