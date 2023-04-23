const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello world!!')
})

app.get('/attractions', (req, res) => {
    connection.query(
      'SELECT * FROM attractions',
      function(err, results, fields) {
        res.send(results)
      }
    )
  })

app.listen(process.env.PORT || 3306)