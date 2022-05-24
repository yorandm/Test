const {
    tables
} = require('..');

module.exports = {
    up: async(knex) => {
        await knex.schema.createTable(tables.doel, (table) => {
            table.uuid('id')
                .primary();
            table.string('chart', 255)
                .notNullable();
            table.string('doelstellingNaam', 255)
                .notNullable();
            // table.double('doelwaarde')
            //     .notNullable();
            table.boolean('doelwaardeMoetGroterZijnDanHuidigeWaarde')
                .notNullable();
            table.double('huidigewaarde')
                .notNullable();
            table.uuid('datasourceID');
            table.boolean('isSubdoelstelling')
                .notNullable();
            table.uuid('doelwaarde');
            table.uuid('subdoelstellingID');
            table.integer("sdgnummer");
            table.foreign('sdgnummer').references(`${tables.sdg}.sdgNummer`);
            table.foreign('subdoelstellingID').references(`${tables.doel}.id`);
            table.foreign('doelwaarde').references(`${tables.datasource}.id`)
            table.foreign('datasourceID').references(`${tables.datasource}.id`);
        });
    },
    down: (knex) => {
        return knex.schema.dropTableIfExists(tables.doel);
    },
};