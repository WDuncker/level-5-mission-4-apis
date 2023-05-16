import { Request, Response } from "express";
import * as calcService from "../services/calcService";

export const calcPremiums = (req: Request, res: Response) => {
  try {
    interface RequestBody {
      carValue: number;
      riskRating: number;
    }

    const { carValue, riskRating }: RequestBody = req.body;

    const yearlyPremium = calcService.yearlyPremium(carValue, riskRating);
    const monthlyPremium = calcService.monthlyPremium(yearlyPremium);

    const premiums = [
      { type: "Yearly Premium", premium: yearlyPremium },
      { type: "Monthly Premium", premium: monthlyPremium },
    ];

    res.json(premiums);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
