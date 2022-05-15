import WishCard from "./WishCard";
import "./WishList.css";

function WishList()
{
    return(
        <div className="wishlist-row">
        <WishCard date="3 May 2022" title="Hotarubi No Mori E" genre="Supernatural, Shojo, Drama, Iyashikei, action, tatakae, tatakae, tatakae" year={2011} episode={1} status="Completed" ></WishCard> 
            
            <WishCard date="3 May 2022" title="Hotarubi No Mori E" genre="Supernatural, Shojo" year={2011} episode={1} status="Completed"></WishCard>
            <WishCard date="3 May 2022" title="Hotarubi No Mori E" genre="Supernatural, Shojo" year={2011} episode={1} status="Completed" ></WishCard>
            <WishCard date="3 May 2022" title="Hotarubi No Mori E" genre="Supernatural, Shojo" year={2011} episode={1} status="Completed" ></WishCard>

        </div>
    )
}
export default WishList;