import express from 'express'
const router = express.Router()

router.post('/carValue', (req, res) => {
  const { model, year } = req.body

  if (!model || !year) {
    return res.status(400).json({ error: 'Model and year are required.' })
  }

  const modelValue = model
    .toUpperCase()
    .split('')
    .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0)

  const carValue = modelValue + parseInt(year)

  res.json({ carValue })
})

export default router
