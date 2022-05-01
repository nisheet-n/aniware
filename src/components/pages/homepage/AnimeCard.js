import "./AnimeCard.css"
import shingekiNoKyojin from "./snk.jpg"

function AnimeCard({ title, year, episodes }) {
     return (
          <div className="anime-card" >
               <div className="anime-poster">
                    <img src={shingekiNoKyojin} alt="snk" />
               </div>

               <div className="anime-info">
                    <div className="anime-title">{title}</div>

                    <div className="anime-release">
                         <div className="anime-year">{year}</div>
                         <div className="anime-episodes">{episodes}</div>
                    </div>
               </div>
          </div >
     )
}

export default AnimeCard