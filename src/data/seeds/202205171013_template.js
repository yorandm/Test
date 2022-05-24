const {
    tables
} = require('..');

module.exports = {
    seed: async(knex) => {

        //deleten
        await knex(tables.templates).delete();

        await knex(tables.templates).insert([{
                id: "32da4349-428c-41fd-96f4-746023c465c8",
                name: "Template MVO-coördinator",
                // userId: "",
            },
            {
                id: "fe2cf95d-2569-4848-af4c-61d70a682593",
                name: "Template Gebruiker",
                // userId: "",
            },
            {
                id: "7dc72f2f-0076-4cba-bf06-26d0232663f3",
                name: "Template Manager",
                // userId: "",
            },
            {
                id: "de11b8e4-38ca-4506-ac8d-f633ecb2b54b",
                name: "Template Directielid",
                // userId: "",
            },
        ])
    },
};