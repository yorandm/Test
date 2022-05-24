const {
    tables
} = require('..');
const Role = require('../../core/roles');

module.exports = {
    seed: async(knex) => {
        // first delete all entries
        // await knex(tables.user).delete();

        // then add the fresh users (all passwords are 12345678)
        //damon
        await knex(tables.user).where("id", '7f28c5f9-d711-4cd6-ac15-d13d71abff81').update({
            activeTemplate: 'fe2cf95d-2569-4848-af4c-61d70a682593',
            role: '5b954c14-51ca-4731-bc9d-041751d85e0d',

        }, );

        //ydm
        await knex(tables.user).where("id", '7f28c5f9-d711-4cd6-ac15-d13d71abff80').update({
            activeTemplate: '32da4349-428c-41fd-96f4-746023c465c8',
            role: 'd7c999d5-ef5b-4b8e-9f24-f2b36da0c461',
        }, );

        //MVO-co
        await knex(tables.user).where("id", '7f28c5f9-d711-4cd6-ac15-d13d71abff82').update({
            activeTemplate: 'fe2cf95d-2569-4848-af4c-61d70a682593',
            role: '5b954c14-51ca-4731-bc9d-041751d85e0d',
        }, );
    },
};