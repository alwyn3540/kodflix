const express = require('express')
const app = express()
const port = 3000
const shows = require('./shows');

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/rest/shows',(req, res) => res.send(shows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))