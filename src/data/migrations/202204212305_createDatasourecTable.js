const {
    tables
} = require('..');

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.datasource, (table) => {
            table.uuid('id')
                .primary();
            table.string('naam', 255)
                .notNullable();
            table.string('xas', 255)
                .notNullable();
            table.string('yas', 255)
                .notNullable();
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.datasource);
    },
};