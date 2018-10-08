const mysqlDump = require('./index');

mysqlDump({
    host: 'localhost',
    user: 'userName',
    password: 'password',
    database: 'databaseName',
    tables: ['table1', 'table2', 'table3'], // only these tables
    //@todo where: {'players': 'id < 1000'}, // Only test players with id < 1000
    //@todo ifNotExist:true, // Create table if not exist
    extendedInsert: true, // use one insert for many rows
    addDropTable: true, // add "DROP TABLE IF EXISTS" before "CREATE TABLE"
    addLocks: true, // add lock before inserting data
    disableKeys: true, //adds /*!40000 ALTER TABLE table DISABLE KEYS */; before insert
    dest: './data.sql' // destination file
}, function(err) {
    if (err) throw err;

    console.log("data.sql file created")
    // data.sql file created;
})