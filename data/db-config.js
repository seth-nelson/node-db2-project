const knex = require('knex');
const config = require('../knexfile.js');

module.exorts = knex(config.development);