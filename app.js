var express = require("express");
var app = express();
app.use(express.json());
// app.get("/", (req, res) => {
//     res.send({
//         Name: "Nawaraj s",
//         Interest: [
//             "Go",
//             "Node",
//             "Vanilla Javascript",
//             "C#"
//         ]
//     })
// });

app.get("/", (req, res) => {
    res.send({
        Name: "Nawaraj s",
        Interest: [
            "Go",
            "Node",
            "Vanilla Javascript",
            "C#ggg"
        ]
    })
});

app.post("/api/saveStudents", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get("/getClient", (request, response) => {
    // var Connection = require('tedious').Connection;
    // var config = {
    //     userName: 'sa',
    //     password: '1234',
    //     server: 'NAVARAJ/SA',
    //     // If you are on Microsoft Azure, you need this:  
    //     options: { encrypt: true, database: 'fivenix_test' }
    // };
    // var connection = new Connection(config);
    // connection.on('connect', function (err) {
    //     // If no error, then good to proceed.  
    //     console.log("Connected");
    //     var request = new sql.Request();
    //     // query to the database and get the records
    //     request.query('select * from Services', function (err, recordset) {
    //         if (err) console.log(err)

    //         // send records as a response
    //         response.send(recordset);
    //     });
    // });

    var sql = require('mssql');
    var sqlConfig = {
        user: 'sa',
        password: '1234',
        server: 'NAVARAJ',
        database: 'fivenix_test',
        // server: "localhost",
        // port: "1433"
        debug: true,
    };

    sql.connect(sqlConfig, function (err) {
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Serives', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            response.send(recordset);

        });
    });
});

app.listen("3000");


// var logger  = require("./logger");
// // logger.log("Test Message");
// logger.log(__filename);
// logger.log(__dirname);

// const os = require("os");
// var totalMemory = os.totalmem();
// var totalFreeMem = os.freemem();

// console.log(`total Memory: ${totalMemory}`)
// console.log(`total Free Memory: ${totalFreeMem}`)

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("<h1>Hello World</h1>");
//         res.end();
//     }

//     if (req.url === '/api/test') {
//         res.write(JSON.stringify({
//             name: "Nawaraj",
//             likes: [
//                 'Name',
//                 "Class"
//             ]
//         }
//         ));
//         res.end();
//     }
// });
// // server.on("Connection");
// server.listen(3000);
// console.log("Listening on port 3000..")


