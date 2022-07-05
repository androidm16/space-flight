const planet_seeds = require("./data/planet_seeds");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("planet").del();
  await knex("planet").insert(planet_seeds);
};
