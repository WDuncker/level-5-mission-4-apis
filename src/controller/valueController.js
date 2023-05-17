// START
// import { Request, Response } from 'express'
import * as calcService from '../services/calcServices.js'

export const checkCarValue = (req, res) => {
  try {
    const model = req.body.model
    const year = req.body.year
    const theCarValue = calcService.calculateCarValue(model, year)
    res.json(theCarValue)
  } catch (error) {
    res.send(`We are so sorry, there appears to be am error: ${error}`)
  }
}
// import { Request, Response } from 'express'
// import * as calcService from '../services/calcServices'

// export const checkCarValue = (req: Request, res: Response) => {
//   try {
//     const { model } = req.body.model
//     const { year } = req.body.year
//     const theCarValue = calcService.calculateCarValue(model, year)
//     res.json(theCarValue)
//   } catch (error) {
//     res.send(`We are so sorry, there appears to be am error: ${error}`)
//   }
// }

// // import { Request, Response } from 'express'
// // import * as calcService from '../services/calcServices'

// // export const calcPremiums = (req: Request, res: Response) => {
// //   try {
// //     //Defines the variables to be posted in the request
// //     const { carValue, riskRating } = req.body

// //     //Calling both functions to process the variables sent in the request
// //     const yearlyPremium = calcService.yearlyPremium(carValue, riskRating)
// //     const monthlyPremium = calcService.monthlyPremium(yearlyPremium)

// //     //Sets out what is to be returned when variables are poste to the API
// //     const premiums = [
// //       { type: 'Yearly Premium', premium: yearlyPremium },
// //       { type: 'Monthly Premium', premium: monthlyPremium },
// //     ]

// //     //Calls the JSON array to be sent back
// //     res.json(premiums)
// //   } catch (error: any) {
// //     res.status(400).json({ error: error.message })
// //   }
// // }
