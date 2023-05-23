import { calcPremiums } from '../../controllers/calcController'
import { createRequest, createResponse } from 'node-mocks-http'

describe('calcPremiums', () => {
  test('Calculates a yearly and monthly premium', () => {
    //arrange
    const req = createRequest()
    const res = createResponse()
    const expected = [
      {
        type: 'Yearly Premium',
        premium: 320,
      },
      {
        type: 'Monthly Premium',
        premium: 26.67,
      },
    ]

    const data = {
      carValue: 8000,
      riskRating: 4,
    }

    req.body = data

    //Act
    calcPremiums(req, res)

    //Assert
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(expected)
  })

  test('Throws error for invalid inputs', () => {
    const req = createRequest()
    const res = createResponse()
    const expected = {
      error: 'Car value and risk rating must be greater than 0',
    }

    const data = {
      carValue: -5400,
      riskRating: 2,
    }

    req.body = data

    calcPremiums(req, res)

    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res._getData())).toEqual(expected)
  })

  test('throws error for having no inputs', () => {
    const req = createRequest()
    const res = createResponse()
    const expected = {
      error: 'You must fill in both fields',
    }

    const data = {
      carValue: 5400,
      riskRating: '',
    }

    req.body = data

    calcPremiums(req, res)

    expect(res.statusCode).toBe(400)
    expect(JSON.parse(res._getData())).toEqual(expected)
  })
})
