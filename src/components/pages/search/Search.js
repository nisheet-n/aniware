import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../../utils/Constants"
import "./Search.css"

function Search() {
     const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [items, setItems] = useState([]);

     const [query, setQuery] = useState("")

     useEffect(() => {
          fetch(BASE_URL + `search?keyw=${query}`)
               .then((res) => res.json())
               .then(
                    (result) => {
                         setIsLoaded(true);
                         setItems(result);
                    },
                    (error) => {
                         setIsLoaded(true);
                         setError(error);
                    }
               );
     }, [query]);

     if (error) {
          return (
               <div className="search-page">
                    <div className="search-heading">
                         {error.message}
                    </div>
               </div>
          )
     }

     else if (!isLoaded) {
          return (
               <div className="search-page">
                    <div className="search-heading">
                         Loading...
                    </div>
               </div>
          )
     }

     else {
          return (
               <div className="search-page">
                    <div className="search-box">
                         <input type="input" className="search-bar" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>

                    {query ?
                         <div className="search-heading">Results for {query}:</div>
                         :
                         <div className="search-heading">Search for animes, tv shows, specials or more...{query}</div>
                    }

                    <div className="search-rows">
                         {items.map((item) => (
                              <Link to={`/anime/${item.animeId}`} className="search-card" key={item.animeId}>
                                   <div className="search-poster">
                                        <img src={item.animeImg} alt={item.animeImg} />
                                   </div>
                                   <div className="search-info">
                                        <div className="search-title">{item.animeTitle}</div>
                                        <div className="search-year">{item.status}</div>
                                   </div>
                              </Link>
                         ))}

                    </div>
               </div>
          );
     }
}

export default Search;