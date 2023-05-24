import { checkCarValue } from '../../controller/valueController'
import { createRequest, createResponse } from 'node-mocks-http'

describe('checkCarValue', () => {
  test('Calculating the value of a car based on model and year inputs', () => {
    //Arrange variables
    const req = createRequest()
    const res = createResponse()
    const expected = {
      carValue: 11469,
    }

    const inputs = {
      model: 'Mustang',
      year: 1969,
    }

    req.body = inputs
    // Actual
    checkCarValue(req, res)
    // Assertions
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(expected)
  })

  test('Throw an error due to invalid inputs - Cannot be blank', () => {
    //Arrange variables
    const req = createRequest()
    const res = createResponse()
    const expected = {
      error: 'Model and year are required.',
    }

    const inputs = {
      model: '',
      year: 1969,
    }

    req.body = inputs
    // Actual
    checkCarValue(req, res)
    // Assertions
    expect(res.statusCode).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(expected)
  })
})
