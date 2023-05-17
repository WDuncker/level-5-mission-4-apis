import express from 'express'
import carValue from './routes/index'

const server: express.Application = express()
server.use(express.json())

server.use('/', carValue)

const PORT = 4000
server.listen(PORT, () => {
  console.log(`******Server started on port 4000**********`)
})
