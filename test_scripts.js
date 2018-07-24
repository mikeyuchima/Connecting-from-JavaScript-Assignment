const settings = require("./settings"); // settings.json
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

var input = process.argv[2];

    knex.select('first_name', 'last_name', 'birthdate').from('famous_people').where('first_name', input).orWhere('last_name', input).asCallback(function(err, rows) {
        if (err) {return console.error(err)}; 
          
        rows.forEach((element, index) => {
            console.log(`${index}: ${element.first_name} ${element.last_name}, born '${element.birthdate}'`) 
         });
         
    });