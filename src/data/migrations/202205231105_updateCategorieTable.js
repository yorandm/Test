const {
    tables
} = require('..');

module.exports = {
    up: async(knex) => {
        await knex.schema.alterTable(tables.categorie, (table) => {
            table.dropColumn('rollen')
        });
    },
    down: (knex) => {
        // return knex.schema.dropTableIfExists(tables.categorie);
    },
};