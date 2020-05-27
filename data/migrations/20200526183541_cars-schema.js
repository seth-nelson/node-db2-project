
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('VIN').unique().notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable();
        tbl.varchar('transmissionType');
        tbl.varchar('titleStatus');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableExists('cars');
};
