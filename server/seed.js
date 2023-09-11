import connectToDB from "./db.js";
import { Movie } from "./model.js";

const db = await connectToDB('postgresql:///movie-list')

const movieData = [
    {
        movieName: 'Logan', 
        imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/logan_584x800_9a5af33a.jpeg'
    },
    {
        movieName: 'X-Men',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg'
    }
]

await db.sync({force: true}).then(async () => {
    await Movie.bulkCreate(movieData)
    console.log('db reset and seeded')
})

await db.close()