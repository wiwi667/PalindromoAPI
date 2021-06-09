const { Router } = require('express')

const app = Router()

const normalizar = txt => {
    return txt.trim().replace(/ +/g, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

app.get('/iecho', (req, res) => {
    if (req.query.text) {
        var _text = req.query.text.split('').reverse().join('')
        res.json({ text: _text, palindrome: normalizar(_text) == normalizar(req.query.text) })
    }
    else
        res.status(400).json({ error: 'no text' })
})

module.exports = app