const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'mydb'
});
let PORT = process.env.PORT || 5000; 
const express = require('express'); 
const app = express();
app.set('views', './views'); 
app.set('view engine', 'ejs'); 
app.use(express.static('public')); 
app.use(express.json());
app.use(function (req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next(); 
})
app.get('/:id', function (req, res) {
  connection.query(`SELECT * FROM coins WHERE id=${req.params.id}`, 
    (err, data) => {
      if (err) return res.status(500);
      res.json(data);
    });
});
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});