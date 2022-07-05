const flightSchema = (table) => {
	// table.int("id").primary().unique();
	table.increments();
    table.uuid("lauchSite_uuid").references('uid').inTable('spaceCenter');
	table.uuid("landingSite_uuid").references('uid').inTable('spaceCenter');
	table.datetime("departure_at").notNullable();
	table.integer("seat_count").notNullable();
	table.timestamps(true, true);
};

module.exports = flightSchema;