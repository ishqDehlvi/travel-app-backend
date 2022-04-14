module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aZPUJuPClncrw2WWtPbJ1A=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'ucjEz7MeSbYQy9GJyhKUXQ=='),
  },
});
