import { Request, Response } from 'express'
import * as calcService from '../services/calcServices'

export const checkCarValue = (req: Request, res: Response) => {
  try {
    const model: string = req.body.model
    const year: string = req.body.year
    const theCarValue = calcService.calculateCarValue(model, year)
    res.json(theCarValue)
  } catch (error) {
    res.send(`We are so sorry, there appears to be am error: ${error}`)
  }
}
