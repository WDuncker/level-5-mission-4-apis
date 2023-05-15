import express, { Router } from "express";
import * as calcController from "../controllers/calcController";

const router: Router = express.Router();

router.post("/calculate-premiums", calcController.calcPremiums);

export default router;
