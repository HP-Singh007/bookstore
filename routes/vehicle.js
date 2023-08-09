import express from "express"
import { deleteVehicle, getAllVehicles, newVehicle } from "../controllers/vehicle.js";
import {isAuthenticated} from "../middlewares/auth.js"

const router=express.Router();

router.post("/new",isAuthenticated,newVehicle);
router.get("/all",isAuthenticated,getAllVehicles);
router.get("/delete/:id",isAuthenticated,deleteVehicle);
// router.post("/new",isAuthenticated,);

export default router;