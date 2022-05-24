const {
    tables
} = require('..');

module.exports = {
    seed: async(knex) => {
        // first delete all entries
        await knex(tables.sdg).delete();

        // then add the fresh users
        await knex(tables.sdg).insert([{
                sdgNummer: 1,
                naam: "Geen armoede",
            },
            {
                sdgNummer: 2,
                naam: "Geen honger",
            },
            {
                sdgNummer: 3,
                naam: "Goede gezondheid en welzijn",
            },
            {
                sdgNummer: 4,
                naam: "Kwaliteitsonderwijs"
            },
            {
                sdgNummer: 5,
                naam: "Gendergelijkheid",
            },
            {
                sdgNummer: 6,
                naam: "Schoon water en sanitair",
                categorieID: '02c6069d-b83f-4a48-bd60-fae53efc806b'
            },
            {
                sdgNummer: 7,
                naam: "Betaalbare en duurzame energie",
                categorieID: '02c6069d-b83f-4a48-bd60-fae53efc806b'
            },
            {
                sdgNummer: 8,
                naam: "Waardig werk en economische groei",
                categorieID: 'adabc340-d329-47cb-864b-ecbfa2eb373c'
            },
            {
                sdgNummer: 9,
                naam: "Industrie, innovatie en infrastructuur"
            },
            {
                sdgNummer: 10,
                naam: "Ongelijkheid verminderen"
            },
            {
                sdgNummer: 11,
                naam: "Duurzame steden en gemeenschappen",
                categorieID: '8424933c-6474-44d6-90c5-5e44c4045af2'
            },
            {
                sdgNummer: 12,
                naam: "Verantwoorde consumptie en productie",
                categorieID: 'adabc340-d329-47cb-864b-ecbfa2eb373c'
            },
            {
                sdgNummer: 13,
                naam: "Klimaatactie",
                categorieID: '02c6069d-b83f-4a48-bd60-fae53efc806b'
            },
            {
                sdgNummer: 14,
                naam: "Leven in het water"
            },
            {
                sdgNummer: 15,
                naam: "Leven op het land"
            },
            {
                sdgNummer: 16,
                naam: "Vrede, veiligheid en sterke publieke diensten"
            },
            {
                sdgNummer: 17,
                naam: "Partnerschap om doelstellingen te bereiken",
                categorieID: 'adabc340-d329-47cb-864b-ecbfa2eb373c'
            }
        ]);
    },
};