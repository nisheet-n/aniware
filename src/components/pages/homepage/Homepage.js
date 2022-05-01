import "./Homepage.css"
import AnimeCard from "./AnimeCard"

function Homepage() {
     return (
          <div className="anime-rows">
               <AnimeCard title="Shingeki No Kyojin" year={2000} episodes={20} />
          </div>
     )
}

export default Homepage