const {
    tables
} = require('..');
const Role = require('../../core/roles');

module.exports = {
    seed: async(knex) => {
        // first delete all entries
        await knex(tables.categorie).delete();

        // then add the fresh users
        await knex(tables.categorie).insert([{
                id: "adabc340-d329-47cb-864b-ecbfa2eb373c",
                naam: "Economie",
                icoon: "bolt",
            },
            {
                id: "8424933c-6474-44d6-90c5-5e44c4045af2",
                naam: "Sociaal",
                icoon: "bolt",
            },
            {
                id: "02c6069d-b83f-4a48-bd60-fae53efc806b",
                naam: "Milieu",
                icoon: "bolt",
            }
        ]);
    },
};