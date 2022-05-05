const express = require('express');
import students from './data/students'

let server = express();

let port = 3005;

append.get('/api', (req, res) => {
    res.json(students)
})

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})