import HomepageCategory from "./homepage-rows/HomepageCategory"
import "./Homepage.css"

function Homepage() {
     return (
          <div className="homepage">
               <div className="banner">
                    <div className="banner-text">
                         Browse and save numerous categories of latest, popular and your favourite animes,
                         without the hassle of making any account, in just a few clicks.
                    </div>
                    <div className="banner-image">
                         <img src={process.env.PUBLIC_URL + '/logo.png'} alt="aniware-logo" />
                    </div>
               </div>

               <HomepageCategory category={"popular"} />
               <HomepageCategory category={"anime-movies"} />
               <HomepageCategory category={"top-airing"} />
          </div>
     )
}

export default Homepage