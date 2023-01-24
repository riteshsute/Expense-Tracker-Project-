const { JSON } = require('sequelize');
const User = require('../models/user');

exports.postUser = ('/user/add-user' , async (req, res, next) => {
        try {
            if(!req.body.phonenumber){
                throw new Error('Phone number is mandatory')
            }
        const name = req.body.name;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;
    
        const data = await User.create( { name: name, email: email, phonenumber: phonenumber, } );
        res.status(201).json({ showNewUserDetail: data })
        } catch(err){
            console.log(err)
            res.status(500).json({
                error: err
            })
        }
    })
    

exports.getUser = ('/user/get-user' , async (req, res, next) => {
    try {
    const users = await User.findAll(); 
        res.status(200).json({ allUsers: users }) 
    }
    catch(err){
        console.log('get user is failing', JSON.stringify(err));
        res.status(500).json({error: err})
    }
    })



// exports.deleteUser = ('/user/delete-user/:id', async (res, req, next) => {
    // try {
    //     if (req.params.id == 'undefined'){
    //         console.log('id is missing')
    //         return res.status(400).json({error: 'id is missing'})
    //     }
    // const uId = req.params.id;
    // await User.destroy({where: {id: uId}});
    // console.log('***123***3000')
    // res.sendStatus(200);
    // } catch(err){
    //     console.log(err+ '***000***');
    //     res.status(500).json({error: err})
    // }
// }) 

exports.deleteUser = ('/user/delete-user/:id', async (req, res, next) => {
    console.log('destroying id')
    try {
        if(req.params.id == 'undefined'){
            console.log(error, 'error is here')
        //     console.log('id is missing')
        //     return res.status(400).json({error: 'id is missing'})
        // console.log(err)
        res.status(400).json(err)
        }
        const uId = req.params.id;
        console.log(uId);
        await User.destroy({where: {id: uId}});
        res.status(200).json({success: true });
     } 
     catch(err){
        // if(req.params.id == 'undefined'){
            console.log(err, 'error is here')
        //     console.log('id is missing')
            return res.status(400).json({error: 'id is missing'})
    //     console.log(err)
    //     res.status(500).json(err)
  }
})

// exports.deUser =  async (req, res) => {
//     console.log(req.query.id)
//     const uId = req.query.id;   //params
//     console.log(uId)
//     await User.destroy({where: {id: uId}});
//     res.sendStatus(200);
// }