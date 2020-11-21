const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  query: `
    articleBySlug(id: ID slug: String): Article
  `,
  resolver: {
    Query: {
      articleBySlug: {
        resolverOf: "Article.findOne",
        async resolver(obj, options, ctx) {
          const article = await strapi
            .query("article")
            .findOne({ slug: options.slug });

          return sanitizeEntity(article, { model: strapi.models.article });
        },
      },
    },
  },
};
