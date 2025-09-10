'use strict';

/**
 * e-newspaper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::e-newspaper.e-newspaper');
