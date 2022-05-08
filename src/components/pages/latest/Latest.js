import { useState, useEffect } from "react";
import axios from 'axios';

import "./Latest.css"
import Navbar from "../../navbar/Navbar"
import LatestCard from "./LatestCard"

function Latest() {
     useEffect(() => {
          getAnime();
     }, []);

     const [animeData, setAnimeData] = useState([]);

     const getAnime = async () => {
          try {
               const response = await axios.get("https://gogoanime.herokuapp.com/recent-release");
               setAnimeData(response.data);
          }
          catch (err) {
               console.log("Error: " + err)
          }
     };

     return (
          <div>
               <Navbar />
               <div className="latest-rows">
                    {
                         animeData.map((anime) => (
                              < LatestCard key={anime.episodeId} episodeTitle={anime.animeTitle} episodeNum={anime.episodeNum} subOrDub={anime.subOrDub} poster={anime.animeImg} url={anime.episodeUrl} />
                         ))
                    }
               </div>
          </div>
     )
}

export default Latest