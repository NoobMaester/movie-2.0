import React from 'react'

const MovieList = ({movies}) => {
    return (
        <>
         {movies.map((movie, index) => <div key={index} className='d-flex justify-content-start m-3'>
            <img src={movie.Poster} alt='Poster'></img>
         </div>)}   
        </>
    )
}

export default MovieList
