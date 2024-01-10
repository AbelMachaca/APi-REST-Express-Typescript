import express from 'express' // ESModules, porque se usa imports y exports

// const express = requiere('express')  => Commonjs require, se utilizaba antiguamente

// Aunque utilicemos ESModules luego cuando se compila en Commonjs o utilizamos Commonjs

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!! ')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
