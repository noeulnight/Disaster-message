const PORT = process.env.DisasterPort || 8004
const disaster = require('./module/disaster')
const { renderFile } = require('ejs')
const path = require('path').resolve
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  disaster().then((result) => {
    renderFile(path() + '/page/index.ejs', { data: result }, (err ,str) => {
      if (err) return res.sendStatus(500)
      res.send(str)
    })
  })
})

app.listen(PORT, () => {
  console.log('Server Online')
})
