import "./Navbar.css"

function Navbar() {
     return (
          <div className="navbar">
               <div className="nav">
                    <div className="nav-title"><a href="/">AniWare</a></div>

                    <div className="nav-links">
                         <div>
                              <a href="/latest">Latest</a>
                         </div>
                         <div>
                              <a href="/popular">Popular</a>
                         </div>
                    </div>

                    <div className="nav-lists">
                         <div>
                              <a href="/watchlist">WatchList</a>
                         </div>
                         <div>
                              <a href="/wishlist">WishList</a>
                         </div>
                    </div>
               </div>

               <div className="anime-search">
                    <input type="input" class="search-bar" placeholder="Search" name="nsearchme" id='search' />
                    {/* <label for="name" class="form__label">Search</label> */}
               </div>
          </div>
     )
}

export default Navbar