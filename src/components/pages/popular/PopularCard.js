import "./PopularCard.css"

function PopularCard({ title, year, poster, url }) {
     var length = 30;
     var finalTitle = title.substring(0, length);
     if (title.length > length) {
          finalTitle = finalTitle + "..."
     }

     const finalUrl = "/anime/" + url;

     return (
          <a className="popular-card" href={finalUrl} rel="noopener noreferrer">
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
          </a >
     )
}

export default PopularCard