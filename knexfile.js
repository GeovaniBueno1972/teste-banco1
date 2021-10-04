// Update with your config settings.


module.exports = {
    client: 'postgresql',
    connection: {
      user: 'mocutjaxmpefri',
      host: 'ec2-44-194-201-94.compute-1.amazonaws.com',
      database: 'dd3gkc07tfoolb',
      password: '7a00ac34c66a83f0ed6490c376e91bb4fc5d12c0044d5512e3d12ac6f3f0fa4e',
      port: 5432,
      ssl: true
      
    },

    

    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tablename: 'knex_migrations'
    }
}