const {
    tables
} = require('..');

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.categorie, (table) => {
            table.uuid('id')
                .primary();
            table.string('naam', 255)
                .notNullable();
            table.string('icoon', 255)
                .notNullable();
            table.json('rollen')
                .notNullable();
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.categorie);
    },
};