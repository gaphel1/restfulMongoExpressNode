const Order = require('../model/order.model')

exports.addOrder = async (req, res, next)=>{
    Order.find({name:req.body.car})
    .exec()
    .then(data=>{
        if(data.length>=0){
            return res.status(500).send("order already exist")
        }
        let order = new Order({
            client:req.body.client,
            car:req.body.car,
        });
        order.save()
        .then(Order=>{
            res.status(201).json({
                mess: 'Order succesfully created',
                response:{
                    type:'PUT'
                }
            })
        })
        .catch(err=> res.status(500).json({
                error:err,
                mess:'Car doesnt exist'
            })
        )
        
    })
    .catch(err=> res.status(500).send(err))
}

exports.findOrder = async (req, res,next)=>{
    Order.find({})
    .populate('car car.owner client')
    .exec()
    .then(data=> res.send(data))
}

exports.deleteOrder = async(req,res,next)=>{
    Order.remove({name:req.body.name})
    .exec()
    .then(data=>{
        if(data.deletedCount ==0) return res.status(500).send('user not avalable')
        else return res.status(200).send(data)
    })
    .catch(err=>{
        return res.status(500).send('not able to delete user')
    })

}