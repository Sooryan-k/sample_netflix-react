import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import { API_KEY,imageUrl} from '../../Constants/Constants'

function Banner() {
    const [movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0]);
            setMovie(response.data.results[0])
            
        })
    },[])

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className="content">
            <div className="title">
                <h2>{movie ? movie.title : ""}</h2>
            </div>
            <div className="btn">
                <button className='btns'>Play</button>
                <button className='btns'>Wishlist</button>
            </div>
            <div className="description">
                <p>{movie ? movie.overview :""}</p>
            </div>
        </div>
        <div className="fade_bottom">
                
        </div>
    </div>
  )
}

export default Banner