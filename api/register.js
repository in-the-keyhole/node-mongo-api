const assert = require('assert');

module.exports = {
    post(app, db){
        app.post('/api/register', function(req, res) {
            db.collection('user').insertOne(req.body, function(err, result) {
                //console.log(req.body);
                res.send(result);
            });  
        })
    }
}