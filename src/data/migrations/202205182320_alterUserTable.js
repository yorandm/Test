const {
    tables
} = require("..");

module.exports = {
    up: async(knex) => {
        await knex.schema.alterTable(tables.user, (table) => {
            table.uuid('activeTemplate');
            table.foreign('activeTemplate').references(`${tables.templates}.id`).onDelete('SET NULL');

        });
    },
    down: (knex) => {
        // return knex.schema.alterTable(tables.templates);
    }
}