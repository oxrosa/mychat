var pg = require('pg');
var env = require('dotenv').load();
var parse_data_url = require('parse-database-url');
var data_url =parse_data_url( process.env.DATABASE_URL);
console.log(data_url.user);
console.log('--------------------- Config File ')
module.exports = {
  development: {
  dialect: "postgresql",  
  username: data_url.user, //env var: PGUSER 
  database:data_url.database, //env var: PGDATABASE 
  password: data_url.password, //env var: PGPASSWORD 
  host: data_url.host, // Server hosting the postgres database 
  port: data_url.port, //env var: PGPORT 
 // max: 10, // max number of clients in the pool 
  //idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
},
}
console.log('--------------------- Config File ------- 2 ');