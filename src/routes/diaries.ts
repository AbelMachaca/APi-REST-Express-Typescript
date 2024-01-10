import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
const router = express.Router()

router.get(('/'), (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get(('/:id'), (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.send(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addDiaryEntry)
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    } else {
      res.status(400).send('An error occurred')
    }
  }
})

export default router
