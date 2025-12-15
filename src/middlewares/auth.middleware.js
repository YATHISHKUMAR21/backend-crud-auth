const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model')


async function authMiddleware (req,res){
    const token = req.cookies [ 'token' ];
    if(!token){
        return res.status(401).json({message: 'Unauthorized pls login bro'});

    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({_id : decoded.id});

        req.user = user;
        next();

        req.user = user;
        return res.status(200).json({message: 'Authorized', user});



    }catch(err){
        return res.status(401).json({message: 'Invalid token pls login'});
    }


}

module.exports = authMiddleware;
