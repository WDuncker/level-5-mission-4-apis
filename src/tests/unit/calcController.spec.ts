import { calcPremiums } from '../../controllers/calcController'
import { createRequest, createResponse } from 'node-mocks-http'

describe('calcPremiums', () => {
  test('Should calculate a yearly and onthly premium', () => {
    //arrange
    const req = createRequest()
    const res = createResponse()
    const expected = [
      {
        premium: 320,
        type: 'Yearly Premium',
      },
      {
        premium: 26.66,
        type: 'Monthly Premium',
      },
    ]

    const data = {
      carValue: 8000,
      riskRating: 4,
    }

    req.body = data

    //Act
    calcPremiums(req, res)
  })
})
