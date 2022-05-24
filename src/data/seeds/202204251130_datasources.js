const {
    tables
} = require('..');

module.exports = {
    seed: async(knex) => {
        // first delete all entries
        await knex(tables.datasources).delete();

        // then add the fresh users
        await knex(tables.datasources).insert([
            // Water
            // Waterverbruik
            // Data
            {
                id: "5fde623b-fe47-4d4f-9f5b-ba59bc197c5b",
                xasWaarde: '2018',
                yasWaarde: '837.2',
            },
            {
                id: "5fde623b-fe47-4d4f-9f5b-ba59bc197c5b",
                xasWaarde: '2019',
                yasWaarde: '818',
            }, {
                id: "5fde623b-fe47-4d4f-9f5b-ba59bc197c5b",
                xasWaarde: '2020',
                yasWaarde: '823.6',
            }, {
                id: "5fde623b-fe47-4d4f-9f5b-ba59bc197c5b",
                xasWaarde: '2021',
                yasWaarde: '829.1',
            },
            // Doelwaarde
            {
                id: "5cffe010-7827-400b-bc42-93f2bf62b1aa",
                xasWaarde: '2018',
                yasWaarde: '840',
            }, {
                id: "5cffe010-7827-400b-bc42-93f2bf62b1aa",
                xasWaarde: '2019',
                yasWaarde: '820',
            }, {
                id: "5cffe010-7827-400b-bc42-93f2bf62b1aa",
                xasWaarde: '2020',
                yasWaarde: '825',
            }, {
                id: "5cffe010-7827-400b-bc42-93f2bf62b1aa",
                xasWaarde: '2021',
                yasWaarde: '835',
            },
            // Standaardtarief water
            // Data
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '01-2021',
                yasWaarde: '2.28',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '02-2021',
                yasWaarde: '2.28',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '03-2021',
                yasWaarde: '2.27',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '04-2021',
                yasWaarde: '2.27',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '05-2021',
                yasWaarde: '2.28',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '06-2021',
                yasWaarde: '2.30',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '07-2021',
                yasWaarde: '2.31',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '08-2021',
                yasWaarde: '2.32',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '09-2021',
                yasWaarde: '2.30',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '10-2021',
                yasWaarde: '2.29',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '11-2021',
                yasWaarde: '2.28',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aed",
                xasWaarde: '12-2021',
                yasWaarde: '2.29',
            },
            // Doelwaarde
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '01-2021',
                yasWaarde: '2.25',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '02-2021',
                yasWaarde: '2.25',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '03-2021',
                yasWaarde: '2.25',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '04-2021',
                yasWaarde: '2.25',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '05-2021',
                yasWaarde: '2.25',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '06-2021',
                yasWaarde: '2.28',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '07-2021',
                yasWaarde: '2.28',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '08-2021',
                yasWaarde: '2.28',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '09-2021',
                yasWaarde: '2.28',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '10-2021',
                yasWaarde: '2.25',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '11-2021',
                yasWaarde: '2.25',
            },
            {
                id: "8f9b27ec-7ebd-4e05-b740-309cbdbd9aee",
                xasWaarde: '12-2021',
                yasWaarde: '2.25',
            },
            // Energie
            // Energieverbruik
            // Data
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ac',
                xasWaarde: '2018',
                yasWaarde: '87.5',
            },
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ac',
                xasWaarde: '2019',
                yasWaarde: '84.7',
            },
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ac',
                xasWaarde: '2020',
                yasWaarde: '79.89',
            },
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ac',
                xasWaarde: '2021',
                yasWaarde: '74.99',
            },
            // Doelwaarde
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ab',
                xasWaarde: '2018',
                yasWaarde: '90',
            },
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ab',
                xasWaarde: '2019',
                yasWaarde: '85',
            },
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ab',
                xasWaarde: '2020',
                yasWaarde: '80',
            },
            {
                id: '5cffe010-7827-400b-bc42-93f2bf62b1ab',
                xasWaarde: '2021',
                yasWaarde: '80',
            },
            // Aantal budgetmeters
            // Data
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '05-2021',
                yasWaarde: '4',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '06-2021',
                yasWaarde: '7',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '07-2021',
                yasWaarde: '8',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '08-2021',
                yasWaarde: '6',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '09-2021',
                yasWaarde: '10',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '10-2021',
                yasWaarde: '14',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '11-2021',
                yasWaarde: '15',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '12-2021',
                yasWaarde: '18',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '01-2022',
                yasWaarde: '30',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '02-2022',
                yasWaarde: '35',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '03-2022',
                yasWaarde: '50',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec90',
                xasWaarde: '04-2022',
                yasWaarde: '50',
            },
            // Doelwaarde
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '05-2021',
                yasWaarde: '5',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '06-2021',
                yasWaarde: '10',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '07-2021',
                yasWaarde: '12',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '08-2021',
                yasWaarde: '14',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '09-2021',
                yasWaarde: '16',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '10-2021',
                yasWaarde: '18',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '11-2021',
                yasWaarde: '20',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '12-2021',
                yasWaarde: '20',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '01-2022',
                yasWaarde: '50',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '02-2022',
                yasWaarde: '45',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '03-2022',
                yasWaarde: '50',
            },
            {
                id: 'e35d4a3a-12be-4c19-8744-4a469e3aec91',
                xasWaarde: '04-2022',
                yasWaarde: '60',
            },
            // Economie
            // Uitbetaalde premies
            // Data
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a0',
                xasWaarde: '2018',
                yasWaarde: '100',
            },
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a0',
                xasWaarde: '2019',
                yasWaarde: '80',
            },
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a0',
                xasWaarde: '2020',
                yasWaarde: '250',
            },
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a0',
                xasWaarde: '2021',
                yasWaarde: '450',
            },
            // Doelwaarde
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a1',
                xasWaarde: '2018',
                yasWaarde: '100',
            },
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a1',
                xasWaarde: '2019',
                yasWaarde: '120',
            },
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a1',
                xasWaarde: '2020',
                yasWaarde: '200',
            },
            {
                id: '09e66bb2-55d8-47ba-859a-379411d5f7a1',
                xasWaarde: '2021',
                yasWaarde: '500',
            },
            // Duurzame steden en gemeenschappen
            // Aantal storingen
            // Data
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff646',
                xasWaarde: '06-2021',
                yasWaarde: '43',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff646',
                xasWaarde: '07-2021',
                yasWaarde: '35',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff646',
                xasWaarde: '08-2021',
                yasWaarde: '37',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff646',
                xasWaarde: '09-2021',
                yasWaarde: '25',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff646',
                xasWaarde: '10-2021',
                yasWaarde: '30',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff646',
                xasWaarde: '11-2021',
                yasWaarde: '32',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff646',
                xasWaarde: '12-2021',
                yasWaarde: '38',
            },
            // Doelwaarde
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff649',
                xasWaarde: '06-2021',
                yasWaarde: '30',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff649',
                xasWaarde: '07-2021',
                yasWaarde: '30',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff649',
                xasWaarde: '08-2021',
                yasWaarde: '30',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff649',
                xasWaarde: '09-2021',
                yasWaarde: '30',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff649',
                xasWaarde: '10-2021',
                yasWaarde: '30',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff649',
                xasWaarde: '11-2021',
                yasWaarde: '30',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff649',
                xasWaarde: '12-2021',
                yasWaarde: '35',
            },
            // Aantal energiestoringen
            // Data
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff648',
                xasWaarde: '06-2021',
                yasWaarde: '30',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff648',
                xasWaarde: '07-2021',
                yasWaarde: '20',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff648',
                xasWaarde: '08-2021',
                yasWaarde: '17',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff648',
                xasWaarde: '09-2021',
                yasWaarde: '22',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff648',
                xasWaarde: '10-2021',
                yasWaarde: '17',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff648',
                xasWaarde: '11-2021',
                yasWaarde: '25',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff648',
                xasWaarde: '12-2021',
                yasWaarde: '27',
            },
            // Doelwaarde
            {
                id: '28a2ea02-5354-4c7a-beb1-f7fe447cd771',
                xasWaarde: '06-2021',
                yasWaarde: '20',
            },
            {
                id: '28a2ea02-5354-4c7a-beb1-f7fe447cd771',
                xasWaarde: '07-2021',
                yasWaarde: '20',
            },
            {
                id: '28a2ea02-5354-4c7a-beb1-f7fe447cd771',
                xasWaarde: '08-2021',
                yasWaarde: '20',
            },
            {
                id: '28a2ea02-5354-4c7a-beb1-f7fe447cd771',
                xasWaarde: '09-2021',
                yasWaarde: '20',
            },
            {
                id: '28a2ea02-5354-4c7a-beb1-f7fe447cd771',
                xasWaarde: '10-2021',
                yasWaarde: '20',
            },
            {
                id: '28a2ea02-5354-4c7a-beb1-f7fe447cd771',
                xasWaarde: '11-2021',
                yasWaarde: '20',
            },
            {
                id: '28a2ea02-5354-4c7a-beb1-f7fe447cd771',
                xasWaarde: '12-2021',
                yasWaarde: '25',
            },
            // Aantal waterstoringen
            // Data
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff647',
                xasWaarde: '06-2021',
                yasWaarde: '10',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff647',
                xasWaarde: '07-2021',
                yasWaarde: '15',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff647',
                xasWaarde: '08-2021',
                yasWaarde: '20',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff647',
                xasWaarde: '09-2021',
                yasWaarde: '3',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff647',
                xasWaarde: '10-2021',
                yasWaarde: '13',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff647',
                xasWaarde: '11-2021',
                yasWaarde: '7',
            },
            {
                id: 'c90a5532-180c-40e6-a797-58daa14ff647',
                xasWaarde: '12-2021',
                yasWaarde: '11',
            },
            // Doelwaarde
            {
                id: '22c5f78e-d22c-4dcf-b643-5c1eb4170ff5',
                xasWaarde: '06-2021',
                yasWaarde: '10',
            },
            {
                id: '22c5f78e-d22c-4dcf-b643-5c1eb4170ff5',
                xasWaarde: '07-2021',
                yasWaarde: '10',
            },
            {
                id: '22c5f78e-d22c-4dcf-b643-5c1eb4170ff5',
                xasWaarde: '08-2021',
                yasWaarde: '10',
            },
            {
                id: '22c5f78e-d22c-4dcf-b643-5c1eb4170ff5',
                xasWaarde: '09-2021',
                yasWaarde: '10',
            },
            {
                id: '22c5f78e-d22c-4dcf-b643-5c1eb4170ff5',
                xasWaarde: '10-2021',
                yasWaarde: '10',
            },
            {
                id: '22c5f78e-d22c-4dcf-b643-5c1eb4170ff5',
                xasWaarde: '11-2021',
                yasWaarde: '10',
            },
            {
                id: '22c5f78e-d22c-4dcf-b643-5c1eb4170ff5',
                xasWaarde: '12-2021',
                yasWaarde: '15',
            },
            // Klimaatactie
            // Opbrengst zonnepanelen
            // Data
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935a',
                xasWaarde: '04-2021',
                yasWaarde: '12',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935a',
                xasWaarde: '05-2021',
                yasWaarde: '14',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935a',
                xasWaarde: '06-2021',
                yasWaarde: '13',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935a',
                xasWaarde: '07-2021',
                yasWaarde: '13',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935a',
                xasWaarde: '08-2021',
                yasWaarde: '12',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935a',
                xasWaarde: '09-2021',
                yasWaarde: '11',
            },
            // Doelwaarde
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935b',
                xasWaarde: '04-2021',
                yasWaarde: '6',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935b',
                xasWaarde: '05-2021',
                yasWaarde: '10',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935b',
                xasWaarde: '06-2021',
                yasWaarde: '15',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935b',
                xasWaarde: '07-2021',
                yasWaarde: '15',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935b',
                xasWaarde: '08-2021',
                yasWaarde: '15',
            },
            {
                id: '9396dcec-f85a-4e5e-9286-88cbe95d935b',
                xasWaarde: '09-2021',
                yasWaarde: '10',
            },
            // Groene stroomcertificaten
            // Data
            {
                id: '325de66f-3f85-4928-b21a-115439fc3689',
                xasWaarde: '2015',
                yasWaarde: '5',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3689',
                xasWaarde: '2016',
                yasWaarde: '25',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3689',
                xasWaarde: '2017',
                yasWaarde: '50',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3689',
                xasWaarde: '2018',
                yasWaarde: '45',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3689',
                xasWaarde: '2019',
                yasWaarde: '170',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3689',
                xasWaarde: '2020',
                yasWaarde: '280',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3689',
                xasWaarde: '2021',
                yasWaarde: '400',
            },
            // Doelwaarde
            {
                id: '325de66f-3f85-4928-b21a-115439fc3690',
                xasWaarde: '2015',
                yasWaarde: '2',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3690',
                xasWaarde: '2016',
                yasWaarde: '20',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3690',
                xasWaarde: '2017',
                yasWaarde: '50',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3690',
                xasWaarde: '2018',
                yasWaarde: '60',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3690',
                xasWaarde: '2019',
                yasWaarde: '100',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3690',
                xasWaarde: '2020',
                yasWaarde: '300',
            },
            {
                id: '325de66f-3f85-4928-b21a-115439fc3690',
                xasWaarde: '2021',
                yasWaarde: '420',
            },
            // Oplaadpunten elektrische wagens
            // Data
            {
                id: '040410e1-2e5e-4757-a420-bdec61938055',
                xasWaarde: '2016',
                yasWaarde: '400',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938055',
                xasWaarde: '2017',
                yasWaarde: '800',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938055',
                xasWaarde: '2018',
                yasWaarde: '1000',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938055',
                xasWaarde: '2019',
                yasWaarde: '1200',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938055',
                xasWaarde: '2020',
                yasWaarde: '2000',
            },
            // Doelwaarde   
            {
                id: '040410e1-2e5e-4757-a420-bdec61938056',
                xasWaarde: '2016',
                yasWaarde: '500',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938056',
                xasWaarde: '2017',
                yasWaarde: '1000',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938056',
                xasWaarde: '2018',
                yasWaarde: '1000',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938056',
                xasWaarde: '2019',
                yasWaarde: '1000',
            },
            {
                id: '040410e1-2e5e-4757-a420-bdec61938056',
                xasWaarde: '2020',
                yasWaarde: '1500',
            },
            // Partnerschap om doelstellingen te bereiken
            // Aantal energieleveranciers
            // Data
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                xasWaarde: '2015',
                yasWaarde: '5',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                xasWaarde: '2016',
                yasWaarde: '7',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                xasWaarde: '2017',
                yasWaarde: '20',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                xasWaarde: '2018',
                yasWaarde: '24',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                xasWaarde: '2019',
                yasWaarde: '32',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                xasWaarde: '2020',
                yasWaarde: '34',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                xasWaarde: '2021',
                yasWaarde: '36',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d6',
                xasWaarde: '2022',
                yasWaarde: '37',
            },
            // Doelwaarde
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                xasWaarde: '2015',
                yasWaarde: '10',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                xasWaarde: '2016',
                yasWaarde: '15',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                xasWaarde: '2017',
                yasWaarde: '20',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                xasWaarde: '2018',
                yasWaarde: '25',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                xasWaarde: '2019',
                yasWaarde: '30',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                xasWaarde: '2020',
                yasWaarde: '35',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                xasWaarde: '2021',
                yasWaarde: '40',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d7',
                xasWaarde: '2022',
                yasWaarde: '40',
            },
            // Aantal lokale energieleveranciers
            // Data
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                xasWaarde: '2015',
                yasWaarde: '1',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                xasWaarde: '2016',
                yasWaarde: '6',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                xasWaarde: '2017',
                yasWaarde: '5',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                xasWaarde: '2018',
                yasWaarde: '10',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                xasWaarde: '2019',
                yasWaarde: '10',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                xasWaarde: '2020',
                yasWaarde: '10',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                xasWaarde: '2021',
                yasWaarde: '12',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d8',
                xasWaarde: '2022',
                yasWaarde: '12',
            },
            // Doelwaarde
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                xasWaarde: '2015',
                yasWaarde: '1',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                xasWaarde: '2016',
                yasWaarde: '5',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                xasWaarde: '2017',
                yasWaarde: '5',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                xasWaarde: '2018',
                yasWaarde: '7',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                xasWaarde: '2019',
                yasWaarde: '10',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                xasWaarde: '2020',
                yasWaarde: '10',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                xasWaarde: '2021',
                yasWaarde: '15',
            },
            {
                id: 'ff81d9be-10c4-41f5-9a77-695ec93f53d9',
                xasWaarde: '2022',
                yasWaarde: '18',
            },
            // Aantal noodleveranciers
            // Data
            {
                id: '816fc46e-638b-44d2-b816-794a5e474827',
                xasWaarde: '2017',
                yasWaarde: '3',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474827',
                xasWaarde: '2018',
                yasWaarde: '4',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474827',
                xasWaarde: '2019',
                yasWaarde: '5',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474827',
                xasWaarde: '2020',
                yasWaarde: '5',
            },
            // Doelwaarde
            {
                id: '816fc46e-638b-44d2-b816-794a5e474828',
                xasWaarde: '2017',
                yasWaarde: '5',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474828',
                xasWaarde: '2018',
                yasWaarde: '5',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474828',
                xasWaarde: '2019',
                yasWaarde: '5',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474828',
                xasWaarde: '2020',
                yasWaarde: '5',
            },
            // Aantal noodenergieleveranciers
            // Data
            {
                id: '816fc46e-638b-44d2-b816-794a5e474829',
                xasWaarde: '2017',
                yasWaarde: '2',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474829',
                xasWaarde: '2018',
                yasWaarde: '2',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474829',
                xasWaarde: '2019',
                yasWaarde: '3',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474829',
                xasWaarde: '2020',
                yasWaarde: '3',
            },
            // Doelwaarde
            {
                id: '816fc46e-638b-44d2-b816-794a5e474830',
                xasWaarde: '2017',
                yasWaarde: '3',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474830',
                xasWaarde: '2018',
                yasWaarde: '3',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474830',
                xasWaarde: '2019',
                yasWaarde: '3',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474830',
                xasWaarde: '2020',
                yasWaarde: '3',
            },
            // Aantal waternoodleveranciers
            // Data
            {
                id: '816fc46e-638b-44d2-b816-794a5e474831',
                xasWaarde: '2017',
                yasWaarde: '1',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474831',
                xasWaarde: '2018',
                yasWaarde: '2',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474831',
                xasWaarde: '2019',
                yasWaarde: '2',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474831',
                xasWaarde: '2020',
                yasWaarde: '2',
            },
            // Doelwaarde
            {
                id: '816fc46e-638b-44d2-b816-794a5e474832',
                xasWaarde: '2017',
                yasWaarde: '2',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474832',
                xasWaarde: '2018',
                yasWaarde: '2',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474832',
                xasWaarde: '2019',
                yasWaarde: '2',
            },
            {
                id: '816fc46e-638b-44d2-b816-794a5e474832',
                xasWaarde: '2020',
                yasWaarde: '2',
            },


        ]);

    },
};