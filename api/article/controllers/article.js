"use strict";

module.exports = {
  index: async (ctx) => {
    const articles = await strapi.query("article").find({ active: true });

    return articles;
  },
  findBySlug: async (ctx) => {
    const article = await strapi
      .query("article")
      .findOne({ slug: ctx.params.slug });

    return article;
  },
};
