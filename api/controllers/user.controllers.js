const bcrypt = require('bcrypt')
const User = require('../model/user.model')
const jwt = require('jsonwebtoken');

exports.signUp = async (req,res,next)=>{
    User.find({$or:[{username:req.body.username}, {password:req.body.password}]})
    .exec()
    .then(data=>{
        if(data.length>=1){
            return res.status(409).send("User Already Exist")
        }else{
           bcrypt.hash(req.body.password, 10)
           .then(hash=>{
            if(!hash)  {}
            let users = new User({
                username: req.body.username,
                password: hash,
                email: req.body.email
            });
            users.save()
            .then(data=>{
                return res.status(200).send("User Created")
            })
            .catch(err=>{
                return res.status(500).json({mess:err})
            })
           })
        }
    })
}

exports.login = async(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(data=>{
        if(data.length<1){
            return res.status(401).send("User does not Exist")
        }else{
            bcrypt.compare(req.body.password, data[0].password)
            .then((result)=> {
                if(result){
                    //jwt token
                    const token = jwt.sign({ 
                        email:data[0].email, 
                        userId:data[0]._id 
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn:"1h"
                    });

                    return res.status(200).json({
                        msg:'auth succesful',
                        token:token
                    })
                }
                else res.status(401).send('not succesful')
            })
            .catch(err=>res.status(401).send(err))
        }
    })
}
exports.findUser = async (req, res,next)=>{
    User.find({})
    .exec()
    .then(data=> res.send(data))
}

exports.deleteUser = async(req,res,next)=>{
    User.remove({username:req.body.username})
    .exec()
    .then(data=>{
        if(data.deletedCount==0) return res.status(500).send('user not avalable')
        else return res.status(200).send(data)
    })
    .catch(err=>{
        return res.status(500).send('not able to delete user')
    })

}