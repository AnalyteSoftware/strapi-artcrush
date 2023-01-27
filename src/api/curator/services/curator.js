'use strict';

/**
 * curator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::curator.curator');
