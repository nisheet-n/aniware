import "./LatestCard.css"

function LatestCard({ episodeTitle, episodeNum, subOrDub, poster, url }) {
     return (
          <a className="latest-card" href={url} target="_blank" rel="noopener noreferrer">
               <div className="latest-header">
                    <div className="latest-poster">
                         <img src={poster} alt={`${url}-poster`} />
                    </div>

                    <div className="latest-subdub">{subOrDub}</div>
               </div>

               <div className="latest-title">{episodeTitle}</div>
               <div className="latest-episode">Episode {episodeNum}</div>
          </a >
     )
}

export default LatestCard