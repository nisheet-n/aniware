import "./WatchCard.css"
import jshk from "./jshk.jpg"

function WatchCard({ date, title, genre, year, episodes, status }) {
     return (
          <div className="watch-card" >
               
               <div className="watch-poster">
                    <img src={jshk} alt="jshk" />
               </div>

               <div className="watch-info">

                    <div className="watch-date">{date}</div>

                    
                    <div className="watch-title">{title}</div>
                    <div className="watch-genre">{genre}</div>
                   
                    <div className="watch-release">
                         <div className="watch-year">{year}</div>
                         <div className="watch-episodes">{episodes}</div>
                    </div>
                    
                    <div className="watch-status">{status}</div>
               </div>
               
          </div >
     )
}

export default WatchCard