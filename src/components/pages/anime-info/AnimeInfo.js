import axios from "axios"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { WishAnimes } from "../wishlist/Wishlist"
import { BASE_URL } from "../../../utils/Constants"
import './AnimeInfo.css'

function AnimeInfo() {
     const location = useLocation();
     const url = location.pathname.split("/anime/")[1]
     const finalUrl = BASE_URL + `anime-details/${url}`

     const [animeData, setAnimeData] = useState([]);
     const [genres, setGenres] = useState([]);
     const [wish, setWish] = useState(0);
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

     function wishAnime() {
          if (WishAnimes.includes(url)) {
               setWish(0);
               const index = WishAnimes.indexOf(url);
               if (index > -1) {
                    WishAnimes.splice(index, 1);
               }
          }
          else {
               setWish(1);
               WishAnimes.push(url)
          }
          window.localStorage.setItem('wishAnime', WishAnimes)
     }

     return (
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
                         {
                              WishAnimes.includes(url) ? (
                                   <i onClick={wishAnime} className="fa fa-bookmark"></i>
                              ) : (
                                   <i onClick={wishAnime} className="fa fa-bookmark-o"></i>
                              )
                         }
                    </div>

                    <div className="anime-genres">
                         {
                              genres.map((genre) => (
                                   <a href={`/genre/${genre.split(' ').join('-')}`} rel="noopener noreferrer" className="anime-genre">{genre} |</a>
                              ))
                         }
                    </div>

                    <p className="anime-desc"><strong>"</strong>{animeData.synopsis}<strong>"</strong></p>
                    <p className="anime-year">Released: {animeData.releasedDate}</p>

                    <hr />

                    <p className="anime-names"><strong>Other Names:</strong></p>
                    <p className="anime-names">{animeData.otherNames}</p>

                    <div className="episode-list">
                         {
                              episodes.map((episode) => (
                                   <a href={episode.episodeUrl} target="_blank" rel="noopener noreferrer" className="episode">EP {episode.episodeNum}</a>
                              ))
                         }
                    </div>
               </div>
          </div>
     )
}

export default AnimeInfo