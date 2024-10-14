import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-52 pr-4'>
      <img  alt='movie card' src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard
