const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');





async function registerController(req, res) {
 const {username, password} = req.body;

 const userAlreadyexists = await userModel.findOne({
    username
 })
    if(userAlreadyexists) {
        return res.status(400).json({message: 'Username already exists'});
    }

    const user = await userModel.create({
        username,
        password :  await bcrypt.hash(password, 10),
    });

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    res.cookie('token', token);

    return res.status(201).json({message: 'User registered successfully', user});



}


async function loginController(req, res) {

    const {username, password} = req.body;
    
    const user = await userModel.findOne({      
        username,
    });

    if(!user) {
        return res.status(400).json({message: 'Invalid username or password'});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(400).json({message: 'Invalid username or password'});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    res.cookie('token', token);
    
    return res.status(200).json({message: 'User logged in successfully', user});
}

//2nd commit
console.log("Auth controller updated");


module.exports = {registerController , loginController};  