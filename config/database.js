module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-176-34-211-0.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dbh3d92500p6ss'),
      user: env('DATABASE_USERNAME', 'gshclfzjfpuwhb'),
      password: env('DATABASE_PASSWORD', '4aa6554bc57a260fd1829424920e2cc0f848b22be8bdddf69373a194b95673f5'),
      ssl: {
        rejectUnauthorized: false
    }
    },
  },
});
