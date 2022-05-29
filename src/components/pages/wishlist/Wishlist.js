import WishCard from "./WishCard"
import "./WishList.css";

var WishAnimes = window.localStorage.getItem('wishAnime');

if (WishAnimes === null) {
     WishAnimes = []
}
else {
     WishAnimes = WishAnimes.split(',')
}
export { WishAnimes }

function Wishlist() {
     if (WishAnimes.includes('')) {
          WishAnimes.splice(0, 1);
     }

     return (
          <div className="wish-page">
               <h1 className="wish-heading">WishList</h1>
               {
                    WishAnimes.length > 0 ? (
                         <div className="wish-row">
                              {
                                   WishAnimes.map((WishAnime) => (
                                        <WishCard key={WishAnime} title={WishAnime} />
                                   ))
                              }
                         </div>
                    ) : (
                         <h1 className="wish-error">No Animes WishListed : (</h1>
                    )
               }
          </div>
     )
}

export default Wishlist