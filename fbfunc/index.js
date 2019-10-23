'use strict'

const escape = require('escape-html')

exports.getUSome = (req, res) => {
    console.log(req.method)
    if (req.method=='GET') {
        res.send(`I get that. Nice, please continue :: ${escape(req.query.q)} <= q`)
    }
    else if (req.method=='POST') {
        res.send(`What, are you woking for the post office now? q:${escape(req.query.q)} and body:\n${JSON.stringify(req.body)}`)
    }
    else if (req.method=='PUT') {
        res.writehead(200, {'content-type': 'application/json'})
        const o = {
            msg: "I pick things up and put them down",
            time: Date(),
            q: escape(req.query.q),
            body: escape(JSON.stringify(req.body)),
        }
        res.send(JSON.stringify(o))
    }
    else {
        res.status(400)
        res.send(`not sure what to do with that`)
    }
}
