const {
    tables
} = require('..');
const Role = require('../../core/roles');

module.exports = {
    seed: async(knex) => {
        // first delete all entries
        await knex(tables.user).delete();

        // then add the fresh users (all passwords are 12345678) 
        await knex(tables.user).insert([{
                //MVO
                id: '7f28c5f9-d711-4cd6-ac15-d13d71abff80',
                name: 'Damon De Letter',
                username: 'Damon',
                password_hash: '$argon2id$v=19$m=131072,t=6,p=1$9AMcua9h7va8aUQSEgH/TA$TUFuJ6VPngyGThMBVo3ONOZ5xYfee9J1eNMcA5bSpq4',
                role: "d7c999d5-ef5b-4b8e-9f24-f2b36da0c461",
                activeTemplate: "32da4349-428c-41fd-96f4-746023c465c8",
            },
            //user
            {
                id: '7f28c5f9-d711-4cd6-ac15-d13d71abff81',
                name: 'Yoran Demunter',
                username: 'Yoran',
                password_hash: '$argon2id$v=19$m=131072,t=6,p=1$9AMcua9h7va8aUQSEgH/TA$TUFuJ6VPngyGThMBVo3ONOZ5xYfee9J1eNMcA5bSpq4',
                role: "5b954c14-51ca-4731-bc9d-041751d85e0d",
                activeTemplate: "fe2cf95d-2569-4848-af4c-61d70a682593",
            },
            //user
            {
                id: '7f28c5f9-d711-4cd6-ac15-d13d71abff82',
                name: 'Patrick Delisse',
                username: 'Patrick',
                password_hash: '$argon2i$v=19$m=16,t=2,p=1$Rlk0dUQ4YktFSEJIR1J1Ug$e4sdVCnKIW/u1cKDs1krQA',
                role: "5b954c14-51ca-4731-bc9d-041751d85e0d",
                activeTemplate: "fe2cf95d-2569-4848-af4c-61d70a682593",
            },
            //mvo
            {
                id: '7f28c5f9-d711-4cd6-ac15-d13d71abff83',
                name: 'Piet Vanderhaeghe',
                username: 'Piet',
                password_hash: '$argon2i$v=19$m=16,t=2,p=1$QkU2WmFYc1FFMFdVdVRjMg$1swd7FPi5QWwU0FPX/EoUw',
                role: "d7c999d5-ef5b-4b8e-9f24-f2b36da0c461",
                activeTemplate: "32da4349-428c-41fd-96f4-746023c465c8",
            },
            //directie
            {
                id: '7f28c5f9-d711-4cd6-ac15-d13d71abff84',
                name: 'Anita De Vuyst',
                username: 'Anita',
                password_hash: '$argon2i$v=19$m=16,t=2,p=1$ckdUR282MjZRckR4SEhqWA$URLJx/0/tpceUfvGkvxEeA',
                role: "44c982d9-2bb4-4b69-a3e6-6780cfd33efb",
                activeTemplate: "7dc72f2f-0076-4cba-bf06-26d0232663f3",
            },
            //maneger
            {
                id: '7f28c5f9-d711-4cd6-ac15-d13d71abff85',
                name: 'Jozef Van Hoecke',
                username: 'Jozef',
                password_hash: '$argon2i$v=19$m=16,t=2,p=1$WlBGT1NrS3dGb2xJUm9ybw$sRAVmUWw5saPaG+D05MO3g',
                role: "d95a4def-2dca-41f0-b6cb-b77ca8f2c11a",
                activeTemplate: "de11b8e4-38ca-4506-ac8d-f633ecb2b54b",
            }
        ]);
    },
};