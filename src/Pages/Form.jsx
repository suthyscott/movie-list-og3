import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Form = () => {
    const navigate = useNavigate()
    const [movieName, setMovieName] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    const handleSubmitForm = e => {
        e.preventDefault()

        const bodyInfo = { movieName, imgUrl }

        axios.post("/api/movies", bodyInfo)
            .then(res => {
                console.log(res)
                navigate('/')
                // alert(`${res.data.movieName} has been added successfully`)
                setMovieName('')
                setImgUrl('')
            })
            .catch(err => {
                console.log(err)
                alert('Oops! Something went wrong.')
            })
    }

    return (
        <form onSubmit={e => handleSubmitForm(e)}>
            <input
                placeholder="Enter name of movie here"
                value={movieName}
                onChange={e => setMovieName(e.target.value)}
            />
            <input
                placeholder="Paste an imag url for the movie here"
                value={imgUrl}
                onChange={e => setImgUrl(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}

export default Form
