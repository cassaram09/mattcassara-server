const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate(params) {
      params.slug = slugify(params.title || "", { strict: true }).toLowerCase();
    },
    beforeUpdate(params, data) {
      if (data && data.title) {
        data.slug = slugify(data.title || "", { strict: true }).toLowerCase();
      }
    },
  },
};
