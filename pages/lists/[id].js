import { useRouter } from "next/router";


// const mysql = require("mysql2");
// const bodyParser = require("body-parser");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "database101",
//   });


export default function showimages() {
    const router = useRouter()
    const {id} = router.query
    
    return <h1> Hello {id} </h1>
}