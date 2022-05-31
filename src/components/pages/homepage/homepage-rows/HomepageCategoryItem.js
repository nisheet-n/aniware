import { Link } from "react-router-dom";

import "./HomepageCategoryItem.css"

function HomepageCategoryItem({ title, poster, url }) {
     var length = 25;
     var finalTitle = title.substring(0, length);
     if (title.length > length) {
          finalTitle = finalTitle + "..."
     }

     return (
          <Link to={`/anime/${url}`} className="homepage-category-item" >
               <div className="homepage-category-item-poster">
                    <img src={poster} alt={`${url}-poster`} />
               </div>

               <div className="homepage-category-item-title">{finalTitle}</div>
          </Link >
     )
}

export default HomepageCategoryItem