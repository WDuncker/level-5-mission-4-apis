import express from 'express'
import * as valueController from '../controller/valueController.js'
const router = express.Router()

router.post('/carValue', valueController.checkCarValue)

export default router
