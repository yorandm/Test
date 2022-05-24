const {
    tables
} = require("..");

module.exports = {
    up: async(knex) => {
        await knex.schema.alterTable(tables.user, (table) => {
            table.dropColumn('roles');
            table.uuid('role')
                .notNullable();
            table.foreign('role').references(`${tables.roles}.id`);
        });
    },
    down: (knex) => {
        // return knex.schema.dropTableIfExists(tables.templates);
    }
}