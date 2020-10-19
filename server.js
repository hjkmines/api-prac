const { Client } = require('pg');

const client = new Client({
    user: "posgres", 
    password: "5435", 
    host: "localhost", 
    port: 5434, 
    database: "dvdrental"
})

client.connect()
    .then(() => console.log('Connected successfully'))
    .catch(e => console.log)
    .finally(() => client.end())