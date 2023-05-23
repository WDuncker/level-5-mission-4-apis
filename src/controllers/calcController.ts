import { Request, Response } from 'express'
import * as calcService from '../services/calcService'

enum premiumTypes {
  yearly = 'Yearly Premium',
  monthly = 'Monthly Premium',
}

export const calcPremiums = (req: Request, res: Response) => {
  try {
    const { carValue, riskRating } = req.body

    if (carValue === '' || riskRating === '') {
      throw new Error('You must fill in both fields')
    }
    if (!(carValue > 0 && riskRating > 0)) {
      throw new Error('Car value and risk rating must be greater than 0')
    }

    const yearlyPremium = calcService.yearlyPremium(carValue, riskRating)
    const monthlyPremium = calcService.monthlyPremium(yearlyPremium)

    const premiums = [
      { type: premiumTypes.yearly, premium: yearlyPremium },
      { type: premiumTypes.monthly, premium: monthlyPremium },
    ]

    res.json(premiums)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
