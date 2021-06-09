const { Router } = require('express')
var cors = require('cors')

const app = Router()

var corsOptions = {
    origin: 'http://localhost:*',
    optionsSuccessStatus: 200
}

app.get('/iecho', (req, res) => {

    if (req.query.text) {
        var _text = req.query.text.split('').reverse().join('')
        res.json({ text: _text, palindrome: _text.trim().replace(/ +/g, '') == req.query.text.trim().replace(/ +/g, '') })
    }
    else
        res.status(400).json({ error: 'no text' })
})




module.exports = app