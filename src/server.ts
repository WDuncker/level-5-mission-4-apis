import express from 'express'
import carValue from './routes/index'

const server = express()
server.use(express.json())

server.use('/', carValue)

const PORT = 4000
server.listen(4000, () => {
  console.log(`server started on port 4000`)
})
