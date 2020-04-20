const Car = require('../model/car.model')

exports.addCar = async (req, res, next)=>{
    Car.find({name:req.body.name})
    .exec()
    .then(data=>{
        if(data.length>=0){
          return res.send('car already exist')
        }
        let car = new Car({
            name:req.body.name,
            owner:req.body.owner,
        });
        car.save()
        .then(car=>{
            res.status(201).json({
                mess: 'car succesfully created',
                response:{
                    type:'PUT'
                }
            })
        })
        .catch(err=>{
             return res.status(500).send(err)
        })
    })
    .catch(err=>{
            return res.status(500).send(err)
        })
}

exports.findCar = async (req, res,next)=>{
    Car.find({})
    .exec()
    .then(data=> res.send(data))
}

exports.deleteCar = async(req,res,next)=>{
    Car.remove({name:req.body.name})
    .exec()
    .then(data=>{
        if(data.deletedCount ==0) return res.status(500).send('user not avalable')
        else return res.status(200).send(data)
    })
    .catch(err=>{
        return res.status(500).send('not able to delete user')
    })

}