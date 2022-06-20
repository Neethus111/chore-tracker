const Pool = require("pg").Pool;

const pool =new Pool ({

    user: "postgres",
    password:"Postgres@2022",
    host: "localhost",
    database: "pernstack",
    port:5432

});

module.exports = pool;