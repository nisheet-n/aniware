import { useState, useEffect } from "react";
import axios from 'axios';

import { BASE_URL } from "../../../utils/BaseURL"
import "./Latest.css"
import LatestCard from "./LatestCard"

function Latest() {
     const [lang, setLang] = useState(1);

     function engSub() {
          setLang(1)
     }
     function engDub() {
          setLang(2)
     }
     function chinSub() {
          setLang(3)
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

     const finalUrl = BASE_URL + `recent-release?type=${lang}&page=${page}`

     const [animeData, setAnimeData] = useState([]);

     useEffect(() => {
          async function getAnime() {
               const response = await axios.get(finalUrl);
               setAnimeData(response.data);
          }
          getAnime();
     }, [finalUrl])

     return (
          <div className="latest-page">
               <h1 className="latest-heading">Latest Releases</h1>
               <div className="category-row">
                    <p onClick={engSub} >English Subtitles</p>
                    <p onClick={engDub} >English Dub</p>
                    <p onClick={chinSub} >Chinese Anime</p>
               </div>

               <div className="latest-rows">
                    {
                         animeData.map((anime) => (
                              < LatestCard key={anime.episodeId} episodeTitle={anime.animeTitle} episodeNum={anime.episodeNum} subOrDub={anime.subOrDub} poster={anime.animeImg} url={anime.episodeUrl} />
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

export default Latest