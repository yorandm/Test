const {
    tables
} = require("..");

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.roles, (table) => {
            table.uuid('id')
                .primary();
            table.uuid('templateID');
            table.string('role').notNullable();

            table.foreign('templateID').references(`${tables.templates}.id`).onDelete('CASCADE');
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.roles);
    }
}