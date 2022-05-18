// api/users.js
module.exports = function (app, mongoose) {
    //Schema di user
    const User = require('./user');
    //GET EVERY USER
    app.get('/users', (req, res) => {
        res.send('Response')
    });
  
    //POST
    app.post('/users', (req, res) => {
        const new_user = new User({
            username: req.body.username,
            email: req.body.email,
            stastistiche: {
                attacco: req.body.attacco,
                difesa: req.body.difesa,
                spin: req.body.spin,
                controllo: req.body.controllo,
                all_around: req.body.all_around
            }
            
        })
        new_user.save().then(() => console.log('user inserito'));
        res.send(new_user.username);
    })
    //GET ONE USER
    app.get('/users/:id', (req, res) => {
        User.find({ "_id": id},function (err, docs) {res.send(docs)})  
    });
    //PUT
    app.put('/users/:id', (req, res) => {
        const body = {
            username: req.body.username,
            email: req.body.email,
            stastistiche: {
                attacco: req.body.attacco,
                difesa: req.body.difesa,
                spin: req.body.spin,
                controllo: req.body.controllo,
                all_around: req.body.all_around
            }
        };
        database.collection('users').update(query, body, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    })
    //DELETE
    app.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        const query = { '_id': id };
        User.find(query, function (err, docs) {
            User.findByIdAndRemove(id, function (docs, err) {
                if (err) {
                    res.send('User non trovato')
                } else {
                    res.send(result)
                    res.send('User cancellato')
                }
            });
        })
    
    })
  } 