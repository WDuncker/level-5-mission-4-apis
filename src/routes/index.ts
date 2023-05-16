import express, { Router } from "express";
import * as calcController from "../controllers/calcController";

const router: Router = express.Router();

//End point for calculating premiums
router.post("/calculate-premiums", calcController.calcPremiums);

export default router;
