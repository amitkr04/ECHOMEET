import express from "express";
import {
  loginController,
  registercontroller,
  testController,
} from "../Controllers/authController.js";
import { requireSignIN } from "../Middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//register || method post

router.post("/register", registercontroller);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIN, testController);

export default router;
