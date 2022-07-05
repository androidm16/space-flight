const bookingSchema = (table) => {
	table.int("id").primary().unique();
    table.string("flight").notNullable();
	table.int("seat_count").notNullable();
	table.string("email").notNullable();
	table.timestamps(true, true);
};

module.exports = bookingSchema;