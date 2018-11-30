const assert = require('assert');
const auth = require('../services/auth');


module.exports = {
    post(app, db){
        app.post('/api/login', function(req, res) {

            db.collection('user').findOne({username: req.body.username}, function(err, doc) {
                assert.equal(err, null);
console.log(doc)
                if ( doc && req.body.password == doc.password ){
                    res.send(
                        
                        auth.sign({
                            username: doc.username,
                            id: doc._id,
                            //compId: doc.compId,
                            role: doc.role
                        })                  
                    );
                }else{
                    res.sendStatus(401);
                }
            });    
        })
    }
}