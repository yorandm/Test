const {
    tables
} = require('..');

module.exports = {
    up: async(knex) => {
        await knex.schema.alterTable(tables.doel, (table) => {
            table.renameColumn('subdoelstellingID', 'parentDoelstellingID');
            table.dropColumn('isSubdoelstelling');
        });
    },
    down: (knex) => {
    },
};