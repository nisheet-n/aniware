import { useState, useEffect } from "react";
import axios from 'axios';

import "./Popular.css"
import Navbar from "../../navbar/Navbar"
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
     // console.log(animeData)

     return (
          <div>
               <Navbar />
               <div className="popular-rows">
                    {
                         animeData.map((anime) => (
                              < PopularCard key={anime.animeid} id={anime.animeid} title={anime.animeTitle} year={anime.releasedDate} poster={anime.animeImg} />
                         ))
                    }
               </div>
          </div>
     )
}

export default Popular