import "./WishList.css";
import gin from "./gin.jfif"

function WishCard({date, title, genre, year, episode,status})
{
    return(
        <div className="wishcard"> 

            <div className="wish-poster"> 
            <img src={gin} alt="gin" />
            </div>

            <div className="anime-info">
                <div className="date">{date}</div>
                <div className="title">{title}</div>
                <div className="genre">{genre}</div>

                <div className="anime-release">
                    <div className="year">{year}</div>
                    <div className="episode">{episode}</div>
                </div>

                <div className="anime-footer">
                    <div className="delete"></div>
                    <div className="status">{status}</div>
                </div>

            </div>
        </div>
    )
}
export default WishCard;