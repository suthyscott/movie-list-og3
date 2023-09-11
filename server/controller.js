import { Movie } from "./model.js"

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
    }
}
