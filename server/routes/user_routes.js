const { Router } = require('express');
const userController = require('../controllers/user_controller');
const router = Router();


// const verifyJWT = require("./Midlleware/verifyJWT");



router.get("/User", userController.getUserData);
router.post("/Signup", userController.registerUser);
router.post("/Login", userController.loginUser);
router.put("/Update", userController.updatepassword);
router.post('/send', userController.sendEmail);

// router.post('/verify-email', userController.verification )
// router.get("/", userController.button2);
module.exports = router;