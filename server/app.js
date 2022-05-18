const express = require('express')
const router = express()
const mysql = require('mysql2')

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cboi',
  database: 'portfolio'
})

router.get('/', (req, res) => {
  DB.query('SELECT projets.*, GROUP_CONCAT(images.lien) AS images, GROUP_CONCAT(technos.nom) AS technos FROM projets LEFT JOIN images ON projets.id = images.id_projet LEFT JOIN technos ON projets.id = technos.id_projet', (err, results) => {
    res.json(results)
  })
})

const port = 3030
router.listen(port, () => {
  console.log(`listening on port ${port}`)
})