// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
    development: {
      client: 'pg',
      connection: {
        database: 'flightsdb',
        user:     'postgres',
        password: 'postgres',
        port: 5432,
        host: 'localhost'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
          directory: './db/seeds'
      }
    },
  
    // production: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // }
  
  };
  