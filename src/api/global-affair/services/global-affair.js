'use strict';

/**
 * global-affair service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-affair.global-affair');
