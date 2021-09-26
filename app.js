const express = require('express')

const app = express()

// How middleware works
app.use((req, res, next) => {
  req.name = 'Nover'
  next()
})

// Index Route
app.get('/', (req, res) => {
  console.log(req.name)
  res.send('HOME')
})

// About Route
app.get('/about', (req, res) => {
  res.send('ABOUT')
})

const port = 5000

app.listen(port, () => {
  console.log(`Server is started on port ${port}`)
})
