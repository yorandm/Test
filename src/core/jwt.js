const config = require('config');
const jwt = require('jsonwebtoken');

const ServiceError = require('./serviceError');

const JWT_AUDIENCE = config.get('auth.jwt.audience');
const JWT_SECRET = config.get('auth.jwt.secret');
const JWT_ISSUER = config.get('auth.jwt.issuer');
const JWT_EXPIRATION_INTERVAL = config.get('auth.jwt.expirationInterval');

module.exports.generateJWT = (user) => {
  const tokenData = {
    userId: user.id,
    roles: user.roles,
  };

  const signOptions = {
    expiresIn: Math.floor(JWT_EXPIRATION_INTERVAL / 1000),
    audience: JWT_AUDIENCE,
    issuer: JWT_ISSUER,
    subject: 'auth',
  };

  return new Promise((resolve, reject) => {
    jwt.sign(
      tokenData, JWT_SECRET, signOptions, (err, token) => {
        if (err) {
          console.log('Error while signing new token:', err.message);
          return reject(err);
        }
        return resolve(token);
      },
    );
  });
};

module.exports.verifyJWT = (authToken) => {
  const verifyOptions = {
    audience: JWT_AUDIENCE,
    issuer: JWT_ISSUER,
    subject: 'auth',
  };

  return new Promise((resolve, reject) => {
    jwt.verify(
      authToken, JWT_SECRET, verifyOptions, (err, decodedToken) => {
        if (err || !decodedToken) {
          console.log('Error while verifying token:', err.message);
          return reject(err || ServiceError.unauthorized('Token could not be parsed'));
        }
        return resolve(decodedToken);
      },
    );
  });
};
