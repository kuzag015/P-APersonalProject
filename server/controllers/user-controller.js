const User = require("../models/User");

const Login = (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email}, (err, user) =>{
        if(user){
            if(password === user.password){
                res.send({message: "Successfully logged in!", user: user})
            }else{
                res.send({message: "Wrong email or password!"})
            }
        }else{
            res.send({message: "User Not Registered!"})
        }
    })
};

const Register = (req, res) => {
    console.log(req.body);
    const {firstName, lastName, email, password} = req.body;
    User.findOne({email: email},(err, user) => {
        if(user){
            res.send({message: "User already exists!"})
        } else {
            const user = new User({firstName, lastName, email, password})
            user.save((err)=>{
                if(err){
                    res.send(err)
                } else {
                    res.send({message: "Successfully logged in!"})
                }
            })
        }
    })
}

module.exports = {
    Login,
    Register
}