const express = require('express')

const app = express()

// Index Route
app.get('/', (req, res) => {
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
