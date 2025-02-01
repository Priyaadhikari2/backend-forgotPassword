const express = require("express");
const userRouter = express.Router();
const {signin, forgotPassword} = require('../controllers/userControllers');

userRouter.post('/signin', signin);
userRouter.post('/forgot-password', forgotPassword);

module.exports = userRouter;