const {
    tables
} = require("..");

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.rolcat, (table) => {
            table.uuid('rolId');
            table.uuid('catId');
            table.primary(['rolId', 'catId']);
            table.foreign('catId').references(`${tables.categorie}.id`).onDelete('CASCADE');
            table.foreign('rolId').references(`${tables.roles}.id`).onDelete('CASCADE');
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.rolcat);
    }
}