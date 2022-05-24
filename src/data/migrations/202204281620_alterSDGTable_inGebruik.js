const {
    tables
} = require('..');

module.exports = {
    up: async(knex) => {
        await knex.schema.alterTable(tables.sdg, (table) => {
            table.dropColumn('inGebruik');
        });
    },
    down: (knex) => {

    },
};