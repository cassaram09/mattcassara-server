"use strict";

module.exports = {
  index: async (ctx) => {
    const projects = await strapi.query("project").find({ active: true });

    return projects;
  },
  findBySlug: async (ctx) => {
    const project = await strapi
      .query("project")
      .findOne({ slug: ctx.params.slug });

    return project;
  },
};
