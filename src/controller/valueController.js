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
