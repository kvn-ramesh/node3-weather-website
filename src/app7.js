const express = require('express')

console.log(__dirname)
console.log(__filename)

const app = express()

app.get('', (req, res) => {
    res.send('<h1>It is Sunny</h1>')
})



app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})