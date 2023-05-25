import * as calcService from '../services/calcServices'
import { Request, Response } from 'express'

export const checkCarValue = (req: Request, res: Response): void => {
  try {
    const model = req.body.model
    const year = req.body.year
    const theCarValue = calcService.calculateCarValue(model, year)
    res.json(theCarValue)
  } catch (error) {
    res
      .status(400)
      .json(`We are so sorry, there appears to be an error: ${error}`)
  }
}
