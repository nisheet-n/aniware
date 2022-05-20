import { useState } from "react";

import "./Genres.css"
import data from "./GenresList"

function Genres() {
     const [genres] = useState(data());
     return (
          <div className="genre-page">
               <h1 className="genre-heading">Genres</h1>
               <div className="genres">
                    {
                         genres.map((genre) => (
                              <a href={`/genre/${genre}`} rel="noopener noreferrer" className="genre" key={genre}>{genre.split('-').join(' ')}</a>
                         ))
                    }
               </div>
          </div >
     )
}

export default Genres