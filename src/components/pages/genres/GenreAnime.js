import axios from "axios"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./GenreAnime.css"
import GenreAnimeCard from "./GenreAnimeCard"

function GenreAnime() {
     const location = useLocation();
     const genre = location.pathname.split("/genre/")[1]
     const finalUrl = `https://gogoanime.herokuapp.com/genre/${genre}`

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
          </div>
     )
}

export default GenreAnime