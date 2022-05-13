import axios from "axios"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../navbar/Navbar";
import './AnimeInfo.css'

function AnimeInfo() {
     const location = useLocation();
     const url = location.pathname.split("/anime/")[1]
     const finalUrl = `https://gogoanime.herokuapp.com/anime-details/${url}`

     const [animeData, setAnimeData] = useState([]);
     const [genres, setGenres] = useState([]);
     const [episodes, setEpisodes] = useState([]);

     useEffect(() => {
          async function getAnime() {
               const response = await axios.get(finalUrl);
               setAnimeData(response.data);
               setEpisodes(response.data.episodesList);
               setGenres(response.data.genres);
          }
          getAnime();
     }, [finalUrl])

     const isSaved = 0;

     return (
          <div>
               <Navbar />

               <div className="anime-info">
                    <div className="anime-header">
                         <div className="anime-background" ></div>

                         <div className="anime-title-type">
                              <h1 className="anime-title">{animeData.animeTitle}</h1>
                              <p className="anime-type">{animeData.type}</p>
                         </div>

                         <img src={animeData.animeImg} alt={url} className="anime-poster" />
                    </div>

                    <div className="anime-details">
                         <div className="anime-status-bar">
                              <p className="anime-episodes">Episodes: {animeData.totalEpisodes}</p>
                              <p className="anime-status">{animeData.status}</p>

                              {isSaved
                                   ? <i className="fa fa-bookmark"></i>
                                   : <i className="fa fa-bookmark-o"></i>
                              }
                         </div>

                         <div className="anime-genres">
                              {
                                   genres.map((genre) => (
                                        <p className="genre">{genre} |</p>
                                   ))
                              }
                         </div>

                         <p className="anime-desc"><strong>"</strong>{animeData.synopsis}<strong>"</strong></p>
                         <p className="anime-year">Released: {animeData.releasedDate}</p>

                         <hr />

                         <p className="anime-names"><strong>Other Names:</strong><br /><em>{animeData.otherNames}</em></p>

                         <div className="episode-list">
                              {
                                   episodes.map((episode) => (
                                        <a href={episode.episodeUrl} target="_blank" rel="noopener noreferrer" className="episode">EP {episode.episodeNum}</a>
                                   ))
                              }
                         </div>
                    </div>
               </div>
          </div >
     )
}

export default AnimeInfo