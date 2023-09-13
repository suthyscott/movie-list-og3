import { Movie } from "../model.js"

export default {
    addMovie: async (req, res) => {
        try {
            console.log("hit addMovie")
            const {movieName, imgUrl} = req.body
            let newMovie = await Movie.create({movieName, imgUrl})
            res.send(newMovie)
        } catch (err) {
            console.log(err)
            res.sendStatus(500).send("Something aint right")
        }
    },
    getAllMovies: async (req, res) => {
        try {
            const movies = await Movie.findAll()
            res.status(200).send(movies)
        } catch(theseHands){
            console.log(theseHands)
            res.sendStatus(500)
        }
    }
}
