import app from '../../app'
import request from 'supertest'

describe('carValue API', () => {
  test('Test should return the value of the car model and year input', async () => {
    // Arrange
    const expected = {}

    // Act
    const res = await request(app).post('/myCarValue')

    // Assert
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
  })
})
