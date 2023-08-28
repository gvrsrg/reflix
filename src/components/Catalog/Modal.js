import React, { useState } from 'react'
import './Modal.css'

export default function Modal(props) {
    let [gif, setGif] = useState("")

    if (!props.show){
        return null
    }
    const notFoundPath = "https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
    async function getGif(word) {
        const apiKey = "AipLyRs9DHlNJaqGmmYtSWKtE87g6WfT";
        let gifSearch = `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${apiKey}&limit=1`;
        let response = await fetch(gifSearch)
        let data = await response.json()
        setGif(data.data.length>0 ? data.data[0].images.fixed_height_still.url : notFoundPath)


      };
    getGif(props.movieName)
    return (
        <div className='modal'>
            <div className='modal-window'>
                <div className='modal-header'>

                </div>
                <div className='modal-body'>
                    <img src={gif} alt={props.movieName}/>
                </div>
                <div className='modal-body'>
                    Rented <em>{props.movieName}</em> successfully!
                </div>
                <div className='modal-footer'>
                    <button className='modal-button' onClick={props.onClose}>X</button>
                </div>
            </div>
        </div>
    )
}
