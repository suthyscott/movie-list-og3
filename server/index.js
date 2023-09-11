import express from 'express'
import ViteExpress from 'vite-express'
import ctrl from './controller.js'
const {addMovie} = ctrl

const app = express()
const PORT = 4545

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/api/movies')
app.post('/api/movies', addMovie)
app.put('/api/movies')
app.delete('/api/movies')

ViteExpress.listen(app, PORT, () => console.log(`Take us to warp ${PORT}`))