module.exports = {
  log: {
    level: 'silly',
    disabled: false,
  },
  cors: {
    origins: ['http://localhost:3000'],
    maxAge: 3 * 60 * 60,
  },
  database: {
    client: 'mysql2',
    host: 'localhost',
    port: 3306,
    name: 'Fluvius',
    user: 'root',
    password: ''
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
      secret: 'niemandkanhetwachtwoordvangroepvierraden',
      expirationInterval: 60 * 60 * 1000, // ms (1 hour)
      issuer: 'groep4.hogent.be',
      audience: 'groep4.hogent.be',
    },
  },
};
