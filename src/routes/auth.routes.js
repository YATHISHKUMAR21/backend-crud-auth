const express = require('express');
const router = express.Router();
const { registerController, loginController } = require('../controllers/auth.controller');


router.post('/register', registerController );

router.post('/login', loginController);

//post /api/posts {image-file} [protected]




module.exports = router;