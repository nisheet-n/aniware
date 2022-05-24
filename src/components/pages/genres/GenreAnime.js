import axios from "axios"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./GenreAnime.css"
import GenreAnimeCard from "./GenreAnimeCard"

function GenreAnime() {
     const location = useLocation();
     const genre = location.pathname.split("/genre/")[1]

     const [page, setPage] = useState(1);

     function decrement() {
          if (page === 1)
               return
          setPage(page - 1)
     }
     function increment() {
          setPage(page + 1)
     }

     const finalUrl = `https://gogoanime.herokuapp.com/genre/${genre}?page=${page}`

     const [animeData, setAnimeData] = useState([]);

     useEffect(() => {
          async function getAnime() {
               const response = await axios.get(finalUrl);
               setAnimeData(response.data);
          }
          getAnime();
     }, [finalUrl])

     return (
          <div className="genre-results-page">
               <h1 className="genre-results-heading">Genre: <em>{genre}</em></h1>
               <div className="genre-results-rows">
                    {
                         animeData.map((anime) => (
                              < GenreAnimeCard key={anime.animeid} title={anime.animeTitle} year={anime.releasedDate} poster={anime.animeImg} url={anime.animeId} />
                         ))
                    }
               </div>
               <div className="page-row">
                    <p className="page-heading">Page:</p>
                    <p onClick={decrement} className="page-link">-</p>
                    <p className="page-current">{page}</p>
                    <p onClick={increment} className="page-link">+</p>
               </div>
          </div>
     )
}

export default GenreAnime