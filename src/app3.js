const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>It is Sunny</h1>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})