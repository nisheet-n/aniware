import { Link } from "react-router-dom";

import "./GenreAnimeCard.css"

function GenreAnimeCard({ title, year, poster, url }) {
     var length = 30;
     var finalTitle = title.substring(0, length);
     if (title.length > length) {
          finalTitle = finalTitle + "..."
     }

     return (
          <div>
               <Link to={`/anime/${url}`} className="genre-anime-card" >
                    <div className="genre-anime-poster">
                         <img src={poster} alt={`${url}-poster`} />
                    </div>

                    <div className="genre-anime-info">
                         <div className="genre-anime-title">{finalTitle}</div>
                         <div className="genre-anime-year">{year}</div>
                    </div>
               </Link >
          </div>
     )
}

export default GenreAnimeCard