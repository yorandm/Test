module.exports = {
    log: {
        level: 'info',
        disabled: false,
    },
    cors: {
        origins: ['http://yorandemunter.be'],
        maxAge: 3 * 60 * 60, // 3h in seconds
    },
    database: {
        client: 'mysql2',
        host: 'localhost',
        port: 3306,
        name: 'Fluvius',
    },
    pagination: {
        limit: 100,
        offset: 0,
    },
    auth: {
        argon: {
            saltLength: 16,
            hashLength: 32,
            timeCost: 6,
            memoryCost: 2 ** 17,
        },
        jwt: {
            // secret comes via env
            expirationInterval: 3 * 24 * 60 * 60 * 1000, // ms (3 days)
            issuer: 'groep4.hogent.be',
            audience: 'groep4.hogent.be',
        },
    },
};