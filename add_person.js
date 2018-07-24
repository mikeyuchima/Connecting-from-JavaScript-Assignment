const pg = require('pg');
const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'development',
        password: 'development',
        database: 'test_db',
        host: 'localhost',
        port: 5432,
        ssl: true
    }
  });

knex.insert([{'first_name': process.argv[2].slice(0,1), 'last_name': process.argv[2].slice(0,1), 'birthdate': process.argv[2].slice(0,1)}]).into('famous_people').then(row => {console.log(row)})