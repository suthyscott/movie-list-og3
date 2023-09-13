import connectToDB from "./db.js";
import {Movie, User} from './model.js'
import bcrypt from 'bcryptjs'

const db = await connectToDB('postgresql:///movie-list')

const movieData = [
    {
        movieName: 'Logan',
        imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/logan_584x800_9a5af33a.jpeg',
        userId: 1
    },
    {
        movieName: 'X-Men',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg',
        userId: 1
    }
]

await db.sync({force: true}).then(async () =>{
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync('scott', salt)
    await User.create({username: 'scott', hashedPass: hash})
    const newMovies = await Movie.bulkCreate(movieData)
    console.log('db reset and seeded')
})

await db.close()