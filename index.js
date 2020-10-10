const PORT = process.env.DisasterPort || 8004
const disaster = require('./module/disaster')
const news = require('./module/news')
const { renderFile } = require('ejs')
const path = require('path').resolve
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => { res.redirect('/disaster') })

app.get('/disaster', (req, res) => {
  disaster().then((result) => {
    renderFile(path() + '/page/disaster.ejs', { data: result }, (err ,str) => {
      if (err) return res.sendStatus(500)
      res.send(str)
    })
  })
})

app.get('/news', (req, res) => {
  news().then((result) => {
    renderFile(path() + '/page/news.ejs', { data: result }, (err ,str) => {
      if (err) return res.sendStatus(500)
      res.send(str)
    })
  })
})

app.listen(PORT, () => {
  console.log('Server Online')
})
