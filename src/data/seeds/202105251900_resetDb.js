const {
    tables
} = require('..');

module.exports = {
    seed: async(knex) => {
        // first delete all entries in every table
        await knex(tables.user).delete();
        await knex(tables.rolcat).delete();
        await knex(tables.roles).delete();
        await knex(tables.templates).delete();
        await knex(tables.doel).delete().whereNot(`${tables.doel}.parentDoelstellingID`, null);

    },
};