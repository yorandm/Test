const {
    tables
} = require('..');

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.datasources, (table) => {
            table.uuid('id');

            table.string('xasWaarde', 255)
                .notNullable();

            table.string('yasWaarde', 255)
                .notNullable();
            table.timestamps();
            table.primary(['id', 'xasWaarde']);
            table.foreign('id').references(`${tables.datasource}.id`)
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.datasources);
    },
};