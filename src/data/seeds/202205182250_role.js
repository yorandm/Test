const {
    tables
} = require('..');
const roles = require('../../core/roles')

module.exports = {
    seed: async(knex) => {

        //deleten
        await knex(tables.roles).delete();

        await knex(tables.roles).insert([{
                id: "5b954c14-51ca-4731-bc9d-041751d85e0d",
                role: roles.USER,
                templateID: "fe2cf95d-2569-4848-af4c-61d70a682593",
            },
            {
                id: "d7c999d5-ef5b-4b8e-9f24-f2b36da0c461",
                role: roles.MVO_COORDINATOR,
                templateID: "32da4349-428c-41fd-96f4-746023c465c8",
            },
            {
                id: "d95a4def-2dca-41f0-b6cb-b77ca8f2c11a",
                role: roles.MANAGER,
                templateID: "7dc72f2f-0076-4cba-bf06-26d0232663f3",
            },
            {
                id: "44c982d9-2bb4-4b69-a3e6-6780cfd33efb",
                role: roles.DIRECTIELID,
                templateID: "de11b8e4-38ca-4506-ac8d-f633ecb2b54b",
            },
            //     {
            //       id:"e6060b52-4669-4dfd-b1e6-50cd71f31818",
            //       role: "Template 3",
            //    },
        ])
    },
};