import express from 'express'
import env from 'dotenv'
import calcRoutes from './routes/index'
import carValue from './routes/index'
import app from './app'

env.config()

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
