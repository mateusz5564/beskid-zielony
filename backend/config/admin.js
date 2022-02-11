module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3d7d818e6d36f2682c7e800ed40e892'),
  },
});
