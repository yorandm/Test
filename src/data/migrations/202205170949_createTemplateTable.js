const {
    tables
} = require("..");

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.templates, (table) => {
            table.uuid('id')
                .primary();

            table.string('name').notNullable();
            table.json('templategrid')
                .notNullable();
            table.uuid('userId');
            table.uuid('catId');
            table.unique('name');
            table.foreign('userId').references(`${tables.user}.id`).onDelete('CASCADE');
            table.foreign('catId').references(`${tables.categorie}.id`).onDelete('CASCADE');
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.templates);
    }
}