"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  index: async (ctx) => {
    const [page, experiences, skills] = await Promise.all([
      strapi.query("about").findOne(),
      strapi.query("experience").find(),
      strapi.query("skill").find(),
    ]);

    return { page, experiences, skills };
  },
};
