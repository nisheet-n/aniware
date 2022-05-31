import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../utils/Constants";

import HomepageCategoryItem from "./HomepageCategoryItem"
import "./HomepageCategory.css"

function HomepageCategory({ category }) {
     const finalUrl = BASE_URL + `${category}`

     const [animeData, setAnimeData] = useState([]);

     useEffect(() => {
          async function getAnime() {
               const response = await axios.get(finalUrl);
               setAnimeData(response.data);
          }
          getAnime();
     }, [finalUrl])

     return (
          <div className="homepage-category">
               <div className="homepage-category-header">
                    <h2 className="homepage-row-title">
                         {category}
                    </h2>
                    <a href="/animes" className="homepage-row-button">View All</a>
               </div>

               <div className="homepage-category-row">
                    {
                         animeData.slice(0, 6).map((anime) => (
                              < HomepageCategoryItem key={anime.animeid} title={anime.animeTitle} poster={anime.animeImg} url={anime.animeId} />
                         ))
                    }
               </div>
          </div>
     )
}

export default HomepageCategory