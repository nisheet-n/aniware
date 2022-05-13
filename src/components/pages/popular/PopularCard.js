import { Link } from "react-router-dom";

import "./PopularCard.css"

function PopularCard({ title, year, poster, url }) {
     var length = 30;
     var finalTitle = title.substring(0, length);
     if (title.length > length) {
          finalTitle = finalTitle + "..."
     }

     return (
          <Link to={`/anime/${url}`} className="popular-card" >
               <div className="popular-poster">
                    <img src={poster} alt="poster" />
               </div>

               <div className="popular-info">
                    <div className="popular-title">{finalTitle}</div>

                    <div className="popular-release">
                         <div className="popular-year">{year}</div>
                         {/* <div className="popular-episodes">{episodes}</div> */}
                    </div>
               </div>
          </Link >
     )
}

export default PopularCard