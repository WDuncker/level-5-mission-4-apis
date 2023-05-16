import express from 'express'
import * as valueController from '../controller/valueController'
const router = express.Router()

router.post('/myCarValue', valueController.checkCarValue)

export default router
