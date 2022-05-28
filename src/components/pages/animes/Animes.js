import { useState, useEffect } from "react";
import axios from 'axios';

import { BASE_URL } from "../../../utils/BaseURL"
import "./Animes.css"
import AnimeCard from "./AnimeCard"

function Animes() {
     const [category, setCategory] = useState("popular");

     function popularAnime() {
          setCategory("popular")
     }
     function animeMovies() {
          setCategory("anime-movies")
     }
     function topAiring() {
          setCategory("top-airing")
     }

     const [page, setPage] = useState(1);

     function decrement() {
          if (page === 1)
               return
          setPage(page - 1)
     }
     function increment() {
          setPage(page + 1)
     }

     const finalUrl = BASE_URL + `${category}?page=${page}`

     const [animeData, setAnimeData] = useState([]);

     useEffect(() => {
          async function getAnime() {
               const response = await axios.get(finalUrl);
               setAnimeData(response.data);
          }
          getAnime();
     }, [finalUrl])

     return (
          <div className="animes-page">
               <h1 className="animes-heading">{category.split('-').join(' ')}</h1>
               <div className="category-row">
                    <p onClick={popularAnime} >Popular</p>
                    <p onClick={animeMovies}>Anime Movies</p>
                    <p onClick={topAiring} >Top Airing</p>
               </div>

               <div className="animes-rows">
                    {
                         category === "top-airing" ? (
                              animeData.map((anime) => (
                                   < AnimeCard key={anime.animeid} title={anime.animeTitle} yearOrEp={anime.latestEp} poster={anime.animeImg} url={anime.animeId} />
                              ))
                         ) : (
                              animeData.map((anime) => (
                                   < AnimeCard key={anime.animeid} title={anime.animeTitle} yearOrEp={anime.releasedDate} poster={anime.animeImg} url={anime.animeId} />
                              ))
                         )
                    }
               </div>

               <div className="page-row">
                    <p className="page-heading">Page:</p>
                    <p onClick={decrement} className="page-link">-</p>
                    <p className="page-current">{page}</p>
                    <p onClick={increment} className="page-link">+</p>
               </div>
          </div >
     )
}

export default Animes