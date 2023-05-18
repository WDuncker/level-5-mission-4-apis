import express, { Router } from 'express'
import * as calcController from '../controllers/calcController'
import * as valueController from '../controller/valueController.js'

const router: Router = express.Router()

//End point for calculating premiums
router.post('/calculate-premiums', calcController.calcPremiums)
router.post('/myCarValue', valueController.checkCarValue)

export default router
