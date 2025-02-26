import { Router } from "express";
import validateRegDetails from "../middlewares/validate.reg.js";
import  ValidateLogDetails from "../middlewares/validate.login.js"
import RegisterUser from "../controllers/Reg.controller.js";
import HashPassword from "../middlewares/hashPassword.js";
import Login from "../controllers/login.controller.js";

const router = Router();
router.get('/', (req, res) => {
    res.send("Hello world");
})
router.post('/register', validateRegDetails, HashPassword, RegisterUser);
router.post("/login",  ValidateLogDetails, Login)

export default router
