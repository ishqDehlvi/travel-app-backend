module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6bd019da9749373922b0cba034336e46'),
  },
});
