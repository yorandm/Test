const {
    tables
} = require("..");

module.exports = {
    up: async(knex) => {
        await knex.schema.alterTable(tables.templates, (table) => {
            table.dropForeign('catId');
            table.dropColumn('templategrid');
            table.dropColumn('catId');
        });
    },
    down: (knex) => {
        // return knex.schema.dropTableIfExists(tables.templates);
    }
}