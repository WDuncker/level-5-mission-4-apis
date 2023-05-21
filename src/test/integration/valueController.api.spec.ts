import app from '../../app'
import request from 'supertest'

describe('carValue API', () => {
  test('Test should return the value of the car model and year input', async () => {
    // Arrange
    const expected = {
      carValue: 11469,
    }

    const input = {
      model: 'mustang',
      year: 1969,
    }

    // Act
    const res = await request(app).post('/api/myCarValue').send(input)

    // Assert
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
  })
})
