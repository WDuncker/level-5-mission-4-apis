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
})
