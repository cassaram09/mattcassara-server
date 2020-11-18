"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  index: async (ctx) => {
    const [articles, page, categories] = await Promise.all([
      strapi.query("article").find({ active: true }),
      strapi.query("blog-page").findOne(),
      strapi
        .query("category")
        .find(undefined, ["category.id", "category.title"]),
    ]);

    return { page, articles, categories };
  },
};
