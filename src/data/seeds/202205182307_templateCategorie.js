const {
    tables
} = require('..');

module.exports = {
    seed: async(knex) => {

        //deleten
        await knex(tables.tempcat).delete();

        await knex(tables.tempcat).insert([{
                //MVO COORDINATOR
                id: "32da4349-428c-41fd-96f4-746023c465c8",
                templategrid: JSON.stringify({
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 2,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 1,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 2,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "adabc340-d329-47cb-864b-ecbfa2eb373c"
            },
            {
                id: "32da4349-428c-41fd-96f4-746023c465c8",
                templategrid: JSON.stringify({
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "8424933c-6474-44d6-90c5-5e44c4045af2"
            },
            {
                id: "32da4349-428c-41fd-96f4-746023c465c8",
                templategrid: JSON.stringify({
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 1,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "6",
                        "w": 1,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "02c6069d-b83f-4a48-bd60-fae53efc806b"
            },
            //USER
            {
                id: "fe2cf95d-2569-4848-af4c-61d70a682593",
                templategrid: JSON.stringify({
                    "lg": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 2,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }],
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 2,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "adabc340-d329-47cb-864b-ecbfa2eb373c"
            },

            //MANAGER
            {
                id: "7dc72f2f-0076-4cba-bf06-26d0232663f3",
                templategrid: JSON.stringify({
                    "lg": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 2,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }],
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 2,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 2,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "adabc340-d329-47cb-864b-ecbfa2eb373c"
            },
            {
                id: "7dc72f2f-0076-4cba-bf06-26d0232663f3",
                templategrid: JSON.stringify({
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 2,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 2,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 2,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "8424933c-6474-44d6-90c5-5e44c4045af2"
            },
            {
                id: "7dc72f2f-0076-4cba-bf06-26d0232663f3",
                templategrid: JSON.stringify({
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 1,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "6",
                        "w": 2,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "02c6069d-b83f-4a48-bd60-fae53efc806b"
            },
            //DIRECTIELID
            {
                id: "de11b8e4-38ca-4506-ac8d-f633ecb2b54b",
                templategrid: JSON.stringify({
                    "lg": [{
                        "h": 1,
                        "i": "0",
                        "w": 1,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 2,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }],
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 2,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 2,
                        "x": 0,
                        "y": 4,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 2,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "adabc340-d329-47cb-864b-ecbfa2eb373c"
            },
            {
                id: "de11b8e4-38ca-4506-ac8d-f633ecb2b54b",
                templategrid: JSON.stringify({
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 2,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 1,
                        "x": 1,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "8424933c-6474-44d6-90c5-5e44c4045af2"
            },
            {
                id: "de11b8e4-38ca-4506-ac8d-f633ecb2b54b",
                templategrid: JSON.stringify({
                    "md": [{
                        "h": 1,
                        "i": "0",
                        "w": 2,
                        "x": 0,
                        "y": 0,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "1",
                        "w": 1,
                        "x": 1,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "2",
                        "w": 2,
                        "x": 0,
                        "y": 1,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "3",
                        "w": 1,
                        "x": 0,
                        "y": 2,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "4",
                        "w": 2,
                        "x": 0,
                        "y": 3,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "5",
                        "w": 2,
                        "x": 0,
                        "y": 4,
                        "moved": false,
                        "static": false
                    }, {
                        "h": 1,
                        "i": "6",
                        "w": 2,
                        "x": 0,
                        "y": 5,
                        "moved": false,
                        "static": false
                    }]
                }),
                catId: "02c6069d-b83f-4a48-bd60-fae53efc806b"
            },
        ])
    },
};