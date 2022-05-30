const express = require('express')
const router = express()
const mysql = require('mysql2/promise')

const DB = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portfolio',
  port: 3306
})

router.get('/', async (req, res) => {
  const projects = await DB.execute('SELECT * FROM projets');

  if (projects) {
    let final = await Promise.all(projects[0].map(async (pro) => {
      const images = await DB.execute(`SELECT id, lien FROM images WHERE id_projet = ${pro.id}`)
      if (images) pro['images'] = images[0];

      const technos = await DB.execute(`SELECT id, nom FROM technos WHERE id_projet = ${pro.id}`)
      if (technos) pro['technos'] = technos[0];

      return pro;
    }))

    res.status(200).json(final);
    }
    return res.status(400)
})

const port = 3030
router.listen(port, () => {
  console.log(`listening on port ${port}`)
})