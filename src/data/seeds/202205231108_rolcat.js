const {
    tables
} = require('..');
const Role = require('../../core/roles');

module.exports = {
    seed: async(knex) => {
        // first delete all entries
        await knex(tables.rolcat).delete();

        // then add the fresh users
        await knex(tables.rolcat).insert([
            //categorien met USER als rol
            {
                catId: "adabc340-d329-47cb-864b-ecbfa2eb373c", //heeft zowel mvo als user
                rolId: "5b954c14-51ca-4731-bc9d-041751d85e0d",
            },
            //categorien met MVO COORDINATOR als rol
            {
                catId: "adabc340-d329-47cb-864b-ecbfa2eb373c", //heeft zowel mvo als user
                rolId: "d7c999d5-ef5b-4b8e-9f24-f2b36da0c461",
            },
            {
                catId: "8424933c-6474-44d6-90c5-5e44c4045af2",
                rolId: "d7c999d5-ef5b-4b8e-9f24-f2b36da0c461",
            },
            {
                catId: "02c6069d-b83f-4a48-bd60-fae53efc806b",
                rolId: "d7c999d5-ef5b-4b8e-9f24-f2b36da0c461",
            },

            //categorien met Manager als rol
            {
                catId: "adabc340-d329-47cb-864b-ecbfa2eb373c", //heeft zowel mvo als user
                rolId: "d95a4def-2dca-41f0-b6cb-b77ca8f2c11a",
            },
            {
                catId: "8424933c-6474-44d6-90c5-5e44c4045af2",
                rolId: "d95a4def-2dca-41f0-b6cb-b77ca8f2c11a",
            },
            {
                catId: "02c6069d-b83f-4a48-bd60-fae53efc806b",
                rolId: "d95a4def-2dca-41f0-b6cb-b77ca8f2c11a",
            },

            //categorien met Directie als rol
            {
                catId: "adabc340-d329-47cb-864b-ecbfa2eb373c", //heeft zowel mvo als user
                rolId: "44c982d9-2bb4-4b69-a3e6-6780cfd33efb",
            },
            {
                catId: "8424933c-6474-44d6-90c5-5e44c4045af2",
                rolId: "44c982d9-2bb4-4b69-a3e6-6780cfd33efb",
            },
            {
                catId: "02c6069d-b83f-4a48-bd60-fae53efc806b",
                rolId: "44c982d9-2bb4-4b69-a3e6-6780cfd33efb",
            }
        ]);
    },
};