"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  index: async (ctx) => {
    const [projects, page] = await Promise.all([
      strapi.query("project").find({ active: true }),
      strapi.query("projects-page").findOne(),
    ]);

    return { page, projects };
  },
};
