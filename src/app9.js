const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname))
console.log(path.join(__dirname, '..'))
console.log(path.join(__dirname, '../..'))
console.log(path.join(__dirname, '../public'))

const app = express()

app.use(express.static())

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