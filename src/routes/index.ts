import express, { Router } from 'express'
import * as calcController from '../controllers/calcController'
import * as valueController from '../controller/valueController'

const router: Router = express.Router()

router.post('/calculate-premiums', calcController.calcPremiums)
router.post('/myCarValue', valueController.checkCarValue)

export default router
