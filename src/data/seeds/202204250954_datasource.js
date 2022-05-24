const {
    tables
} = require('..');

module.exports = {
    seed: async (knex) => {
        // first delete all entries
        //TODO Vragen
        await knex(tables.doel).delete();
        await knex(tables.sdg).delete();
        await knex(tables.datasources).delete();


        await knex(tables.datasource).delete();

        // then add the fresh users
        // x-as eenheid van tijd
        // y-as waarde naar keuze
        await knex(tables.datasource).insert([
            // Water
            {
                id: '5fde623b-fe47-4d4f-9f5b-ba59bc197c5b',
                naam: 'DatasourceWaterverbruik',
                xas: 'Datum',
                yas: 'Miljoen m3',
            },
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1aa',
                naam: 'DoelwaardeWaterverbruik',
                xas: 'Datum',
                yas: 'Miljoen m3',
            },
            {
                id: '8f9b27ec-7ebd-4e05-b740-309cbdbd9aed',
                naam: 'DatasourceStandaardtariefWater',
                xas: 'Datum',
                yas: 'Prijs in € per m3',
            },
            {
                id: '8f9b27ec-7ebd-4e05-b740-309cbdbd9aee',
                naam: 'DoelwaardeStandaardtariefWater',
                xas: 'Datum',
                yas: 'Prijs in € per m3',
            },
            // Energie
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ac',
                naam: 'DatasourceEnergieverbruik',
                xas: 'Datum',
                yas: 'tWh/jaar',
            },
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ab',
                naam: 'DoelwaardeEnergieverbruik',
                xas: 'Datum',
                yas: 'tWh/jaar',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                naam: 'DatasourceAantalBudgetmeters',
                xas: 'Datum',
                yas: 'Aantal',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                naam: 'DoelwaardeAantalBudgetmeters',
                xas: 'Datum',
                yas: 'Aantal',
            },
            // Economie
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a0',
                naam: 'DatasourceUitbetaaldePremies',
                xas: 'Datum',
                yas: 'Aantal premies',
            },
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a1',
                naam: 'DoelwaardeUitbetaaldePremies',
                xas: 'Datum',
                yas: 'Aantal premies',
            },
            // Duurzame steden en gemeenschappen
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff646',
                naam: 'DatasourceAantalStoringen',
                xas: 'Datum',
                yas: 'Aantal storingen',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff649',
                naam: 'DoelwaardeAantalStoringen',
                xas: 'Datum',
                yas: 'Aantal storingen',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff648',
                naam: 'DatasourceAantalEnergieStoringen',
                xas: 'Datum',
                yas: 'Aantal energiestoringen',
            },
            {
                id: '28a2ea02-5354-4c7a-beb1-f7fe447cd771',
                naam: 'DoelwaardeAantalEnergieStoringen',
                xas: 'Datum',
                yas: 'Aantal energiestoringen',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff647',
                naam: 'DatasourceAantalWaterStoringen',
                xas: 'Datum',
                yas: 'Aantal waterstoringen',
            },
            {
                id: '22c5f78e-d22c-4dcf-b643-5c1eb4170ff5',
                naam: 'DoelwaardeAantalWaterStoringen',
                xas: 'Datum',
                yas: 'Aantal waterstoringen',
            },
            // { NIET DOEN
            //     id: '7dde54d2-20de-4299-9bdd-66d1d4411fef',
            //     naam: 'DatasourceWerfvertragingen',
            //     xas: 'Datum',
            //     yas: 'Aantal vertragingen',
            // },
            // Klimaatactie
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935a',
                naam: 'DatasourceOpbrengstZonnepanelen',
                xas: 'Datum',
                yas: 'Opbrengst zonnepanelen in kWh',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935b',
                naam: 'DoelwaardeOpbrengstZonnepanelen',
                xas: 'Datum',
                yas: 'Opbrengst zonnepanelen in kWh',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3689',
                naam: 'DatasourceGroenestroomCertificaten',
                xas: 'Datum',
                yas: 'Aantal certificaten',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3690',
                naam: 'DoelwaardeGroenestroomCertificaten',
                xas: 'Datum',
                yas: 'Aantal certificaten',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938055',
                naam: 'DatasourceOplaadpunten',
                xas: 'Datum',
                yas: 'Aantal oplaadpunten',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938056',
                naam: 'DoelwaardeOplaadpunten',
                xas: 'Datum',
                yas: 'Aantal oplaadpunten',
            },
            // Partnerschap om doelstellingen te bereiken
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                naam: 'DatasourceAantalEnergieleveranciers',
                xas: 'Datum',
                yas: 'Aantal leveranciers',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                naam: 'DoelwaardeAantalEnergieleveranciers',
                xas: 'Datum',
                yas: 'Aantal leveranciers',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                naam: 'DatasourceLokaleEnergieleveranciers',
                xas: 'Datum',
                yas: 'Aantal lokale leveranciers in Oost-Vlaanderen',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                naam: 'DoelwaardeLokaleEnergieleveranciers',
                xas: 'Datum',
                yas: 'Aantal lokale leveranciers in Oost-Vlaanderen',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474827',
                naam: 'DatasourceAantalNoodleveranciers',
                xas: 'Datum',
                yas: 'Aantal noodleveranciers',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474828',
                naam: 'DoelwaardeAantalNoodleveranciers',
                xas: 'Datum',
                yas: 'Aantal noodleveranciers',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474829',
                naam: 'DatasourceNoodleveranciersEnergie',
                xas: 'Datum',
                yas: 'Aantal energienoodleveranciers',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474830',
                naam: 'DoelwaardeNoodleveranciersEnergie',
                xas: 'Datum',
                yas: 'Aantal energienoodleveranciers',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474831',
                naam: 'DatasourceNoodleveranciersWater',
                xas: 'Datum',
                yas: 'Aantal waternoodleveranciers',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474832',
                naam: 'DoelwaardeNoodleveranciersWater',
                xas: 'Datum',
                yas: 'Aantal waternoodleveranciers',
            }
        ]);
    }
};