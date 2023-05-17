import express from 'express'
import * as valueController from '../controller/valueController.js'

const router: express.Router = express.Router()

router.post('/myCarValue', valueController.checkCarValue)

export default router

// SAVING THE OLD JS WAY
// import express from 'express'
// import * as valueController from '../controller/valueController.js'
// const router = express.Router()

// router.post('/myCarValue', valueController.checkCarValue)

// export default router
