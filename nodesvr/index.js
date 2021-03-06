'use strict'

const escape = require('escape-html')

exports.getUSome = (req, res) => {
    console.log(req.method)
    if (req.method=='GET') {
        res.send(`You GET what you get with me. :: ${escape(req.query.q)} <= q`)
    }
    else if (req.method=='POST') {
        res.send(`That's a post with q:${escape(req.query.q)} and body:\n${JSON.stringify(req.body)}`)
    }
    else {
        res.status(400)
        res.send(`not sure what to do with that`)
    }
}
