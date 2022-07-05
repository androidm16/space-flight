const spaceCenterSchema = (table) => {
    // table.increments();
	table.uuid("id").primary().unique();
	table.int("planet_id").references('id').inTable('planet');
	table.string("name").notNullable();
	table.string("description").notNullable();
    table.float("latitude ").notNullable();
	table.float("longitude").notNullable();
	table.string("planet_code").notNullable();
	table.timestamps(true, true);
};

module.exports = spaceCenterSchema;