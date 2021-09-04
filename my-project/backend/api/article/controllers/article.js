const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { activeId } = ctx.params;

    const entity = await strapi.services.article.findOne({ activeId });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
};
