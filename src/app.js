const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', require('./routes/iecho'))

app.listen(3010)

console.log('Server on port', 3010)

module.exports = app
