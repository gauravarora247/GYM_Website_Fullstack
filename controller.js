
const gymdb = require('../model/Gym');

exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const gym = new gymdb({
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        locality : req.body.locality,
        number : req.body.number,
        email : req.body.email,
    })

    // save user in the database
    gym
        .save(gym)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}
