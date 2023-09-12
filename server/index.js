import express from 'express'
import session from 'express-session'
import ViteExpress from 'vite-express'
import movieCtrl from './controllers/movieCtrl.js'
import authCtrl from './controllers/authCtrl.js'
const {addMovie, getAllMovies} = movieCtrl
const {register, login, checkUser, logout} = authCtrl

const app = express()
const PORT = 4545

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: 'as;ldfkjas;dlkjfgasdfl;jkghjsd;kl',
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))

// authentication endpoints
app.post('/api/register', register)
app.post('/api/login', login)
app.get('/api/user', checkUser)
app.delete('/api/logout', logout)

// Movie list endpoints
app.get('/api/movies', getAllMovies)
app.post('/api/movies', addMovie)
app.put('/api/movies')
app.delete('/api/movies')

ViteExpress.listen(app, PORT, () => console.log(`Take us to warp ${PORT}`))