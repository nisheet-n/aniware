import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../utils/Constants"

import "./WishCard.css";

function WishCard({ title }) {
	const finalUrl = BASE_URL + `anime-details/${title}`

	const [animeData, setAnimeData] = useState([]);
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		async function getAnime() {
			const response = await axios.get(finalUrl);
			setAnimeData(response.data);
			setGenres(response.data.genres);
		}
		getAnime();
	}, [finalUrl])

	return (
		<Link to={`/anime/${title}`} className="wish-card">
			<div className="wish-poster" >
				<img src={animeData.animeImg} alt={title} />
			</div>

			<div className="wish-info">
				<div className="wish-title">{animeData.animeTitle}</div>
				<div className="wish-genres">
					{
						genres.map((genre) => (
							<p href={`/genre/${genre.split(' ').join('-')}`} rel="noopener noreferrer" key={genre} className="wish-genre">{genre} |</p>
						))
					}
				</div>

				<div className="wish-year">Released: {animeData.releasedDate}</div>

				<div className="wish-footer">
					<div className="wish-episodes">Episodes: {animeData.totalEpisodes}</div>
					<div className="wish-status">{animeData.status}</div>
				</div>
			</div>
		</Link>
	)
}
export default WishCard;