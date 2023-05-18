import express from 'express'
import env from 'dotenv'
import carValue from './routes/index'

env.config()

const server = express()
server.use(express.json())

server.use('/', carValue)

const PORT = process.env.PORT
server.listen(PORT, () => {})
