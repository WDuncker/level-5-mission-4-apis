import express from 'express'
import routeIndex from './routes'

const app = express()
app.use(express.json())

app.use('/api', routeIndex)

export default app
