import "./WatchCard.css"
import WatchCard from "./WatchCard"

function WatchList() {
     return (
          <div className="anime-rows">
               <WatchCard date="2 May 2022" title="Jibaku Shounen Hanako Kun" genre='Comedy, Supernatural, School, Shounen'year={2013} episodes={13} status="Completed" />
               <WatchCard date="2 May 2022" title="spy x fam" genre='Comedy, School, Shounen'year={2022} episodes={13} status="onn going" />

          </div>
     )
}

export default WatchList