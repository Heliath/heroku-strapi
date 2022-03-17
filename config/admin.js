module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7eccebc23a1e1899abe103c85b27d3c4'),
  },
});
