const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate(params) {
      params.slug = slugify(params.title, { strict: true }).toLowerCase();
    },
    beforeUpdate(params, data) {
      data.slug = slugify(data.title, { strict: true }).toLowerCase();
    },
  },
};
