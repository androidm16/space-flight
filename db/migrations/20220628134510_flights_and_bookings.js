/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    // .createTable('planet', require('./Models/Planet')) // Planet Schema
    .createTable('spaceCenter', require('./Models/SpaceCenter')) // Space Center Schema
    // .createTable('flights', require('./Models/Flights')) // Flight Schema
    // .createTable('booking', require('./Models/Booking')) // Booking Schema

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    // .dropTable('booking')
    // .dropTable('flights')
    .dropTable('spaceCenter')
    // .dropTable('planet')

};
