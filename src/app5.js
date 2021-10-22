const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>It is Sunny</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Ramesh',
        age: 27
    })
})

app.get('/about', (req, res) => {
    res.send([
        {name: 'Ramesh'},
        {name: 'Sarah'}
    ])
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})