const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
    projectBySlug(id: ID slug: String): Project
  `,
  resolver: {
    Query: {
      projectBySlug: {
        resolverOf: "Project.findOne",
        async resolver(obj, options, ctx) {
          const project = await strapi
            .query("project")
            .findOne({ slug: options.slug });

          return sanitizeEntity(project, { model: strapi.models.project });
        },
      },
    },
  },
};
