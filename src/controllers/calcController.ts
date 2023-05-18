import { Request, Response } from "express";
import * as calcService from "../services/calcService";

export const calcPremiums = (req: Request, res: Response) => {
  try {
    //Defines the variables to be posted in the request
    const { carValue, riskRating } = req.body;

    //Calling both functions to process the variables sent in the request
    const yearlyPremium = calcService.yearlyPremium(carValue, riskRating);
    const monthlyPremium = calcService.monthlyPremium(yearlyPremium);

    //Sets out what is to be returned when variables are poste to the API
    const premiums = [
      { type: "Yearly Premium", premium: yearlyPremium },
      { type: "Monthly Premium", premium: monthlyPremium },
    ];

    //Calls the JSON array to be sent back
    res.json(premiums);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
