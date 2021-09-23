const routes = require('express').Router();

routes.use('/', (req, res) => {
    res.send('Ok')
})

module.exports = routes