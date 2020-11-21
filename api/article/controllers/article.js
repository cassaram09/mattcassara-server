"use strict";

module.exports = {
  index: async (ctx) => {
    const articles = await strapi.query("article").find({ active: true });

    return articles;
  },
};
