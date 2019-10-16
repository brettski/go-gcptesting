'use strict'

const escape = require('escape-html')

exports.getUSome = (req, res) => {
    console.log(req.method)
    if (req.method=='GET') {
        res.send(`That's a get with ${escape(req.query.q)} <= q`)
    }
    else {
        res.status(400)
        res.send(`not sure what to do with that`)
    }
}