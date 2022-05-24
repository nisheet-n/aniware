import { useState, useEffect } from "react";
import axios from 'axios';

import "./Popular.css"
import PopularCard from "./PopularCard"

function Popular() {
     const [page, setPage] = useState(1);

     function decrement() {
          if (page === 1)
               return
          setPage(page - 1)
     }
     function increment() {
          setPage(page + 1)
     }

     const finalUrl = `https://gogoanime.herokuapp.com/popular?page=${page}`

     const [animeData, setAnimeData] = useState([]);

     useEffect(() => {
          async function getAnime() {
               const response = await axios.get(finalUrl);
               setAnimeData(response.data);
          }
          getAnime();
     }, [finalUrl])

     return (
          <div className="popular-page">
               <h1 className="popular-heading">Popular Animes</h1>
               <div className="popular-rows">
                    {
                         animeData.map((anime) => (
                              < PopularCard key={anime.animeid} title={anime.animeTitle} year={anime.releasedDate} poster={anime.animeImg} url={anime.animeId} />
                         ))
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

export default Popular