import request from 'supertest'
import app from '../../app'

describe('Quotes API', () => {
  test('it should return the yearly premium and monthly premium figures', async () => {
    //Arrange
    const expected = [
      {
        premium: 105,
        type: 'Yearly Premium',
      },
      {
        premium: 8.75,
        type: 'Monthly Premium',
      },
    ]

    const data = {
      carValue: 3500,
      riskRating: 3,
    }

    //Act
    const res = await request(app).post('/api/calculate-premiums').send(data)

    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
  })

  test('it should return an error asking the user to enter inputs to both fields', async () => {
    const expected = {
      error: 'You must fill in both fields',
    }

    const data = {
      carValue: '',
      riskRating: 5,
    }

    const res = await request(app).post('/api/calculate-premiums').send(data)

    expect(res.status).toEqual(400)
    expect(res.body).toEqual(expected)
  })

  test('it should return an error telling the user that both inputs must be greater than 0', async () => {
    const expected = {
      error: 'Car value and risk rating must be greater than 0',
    }

    const data = {
      carValue: -6700,
      riskRating: 5,
    }

    const res = await request(app).post('/api/calculate-premiums').send(data)

    expect(res.status).toEqual(400)
    expect(res.body).toEqual(expected)
  })
})
