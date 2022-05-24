const {
    tables
} = require('..');

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.sdg, (table) => {
            table.integer('sdgNummer')
                .primary();
            table.string('naam', 255)
                .notNullable();
            table.boolean('inGebruik')
                .notNullable();
            table.uuid('categorieID');
            table.foreign('categorieID').references(`${tables.categorie}.id`);
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.sdg);
    },
};