const {
    tables
} = require("..");

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.tempcat, (table) => {
            table.uuid('id');
            table.json('templategrid')
                .notNullable();
            table.uuid('catId');
            table.primary(['id', 'catId']);
            table.foreign('catId').references(`${tables.categorie}.id`).onDelete('CASCADE');
            table.foreign('id').references(`${tables.templates}.id`).onDelete('CASCADE');
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.tempcat);
    }
}