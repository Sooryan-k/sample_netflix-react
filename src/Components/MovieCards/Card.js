import React from 'react'
import './Card.css'
import { useEffect,useState } from 'react'
import axios from '../../Axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Card(props) {
    const [card, setCard]= useState([])
    const [urlId, setUrlId]= useState([])
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data);
            setCard(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
        autoplay: 1,
        },
      };
      const handleMovieId=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data); 
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
                
            }else{
                console.log('array empty');
                
            }
        })
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="card">
            {card.map((obj)=>
            <img onClick={()=>handleMovieId(obj.id)} alt="cards" className={props.isSmall ? 'smallCards':'cards'}  src={`${imageUrl+obj.backdrop_path}`}/>
            )}  
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Card