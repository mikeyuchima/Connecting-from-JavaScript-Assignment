const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

var input = process.argv[2];
    client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }

        let query = 
        `SELECT famous_people.first_name, famous_people.last_name, to_char(famous_people.birthdate, 'YYYY-MM-DD')
        FROM famous_people
        WHERE famous_people.first_name = $1::text OR famous_people.last_name = $1::text`;

        client.query(query, [input], (err, result) => {
        console.log('Searching...');

        if (err) {
        return console.error("error running query", err);
        }

        console.log(`Found ${result.rows.length} Person(s) by the name of '${input}':`);
        result.rows.forEach((element, index, array) => {
           console.log(`${index}: ${element.first_name} ${element.last_name}, born '${element.to_char}'`) 
        });
        client.end();
        });
});