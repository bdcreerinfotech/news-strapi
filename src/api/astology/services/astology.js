'use strict';

/**
 * astology service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::astology.astology');
