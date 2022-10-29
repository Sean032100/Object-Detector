const express = require("express");
const mysql = require("mysql2");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 5000;
var path = require('path');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database101",
  });

//
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// READ (select)
app.get("/show", (req, res) => {
  connection.query("SELECT * FROM detection", (err, results) => {
    try {
      if (results.length > 0) {
        let all = [];
        for (let i = 0; i < results.length; i++){
            all.push({
                image: new Buffer.from(results[i].image).toString('utf-8'),
                datetime: results[i].datetime
          })
        }
        res.json(all[0]['image'])
        console.log(all[0]['image'])
      }
    } catch (err) {
      res.json({ message: err });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// export default function gallery() {
//     return (
//         <Image />
//     )
// }


// function Image() {

//     return (
//         <a href="#" className="group">
//             <img alt="" src="https://bit.ly/placeholder-img" className="group-hover:opacity-75"/>
//             <h3 className="mt-4 text-sm Otext-gray-700">Lee Robinson</h3>
//             <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
//         </a>
//     )
// }    

