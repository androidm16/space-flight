const { v4 } = require("uuid");
const space_center_seeds = require("./data/space_center_seeds");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("spaceCenter").del();
  await knex("spaceCenter").insert(space_center_seeds);
};
