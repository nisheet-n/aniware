import { useState, useEffect } from "react";
import axios from 'axios';

import "./Popular.css"
import PopularCard from "./PopularCard"

function Popular() {
     useEffect(() => {
          getAnime();
     }, []);

     const [animeData, setAnimeData] = useState([]);

     const getAnime = async () => {
          try {
               const response = await axios.get("https://gogoanime.herokuapp.com/popular");
               setAnimeData(response.data);
          }
          catch (err) {
               console.log("Error: " + err)
          }
     };

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
          </div>
     )
}

export default Popular