import "./About.css";

function About({title, main})
{
    return(
        <div className="aboutcard"> 
        <div className="about-poster">
            <div className="title"><h1 >ABOUT </h1></div>
            <div className="main">
                <main>

Aniware is a place, where you can  watch new, old, popularly released and latest animes with numerous genres and search functionality  

which will help to classify shows according to your choice and mood :) <br></br>
<br></br>
This is an opensource website which we have created using react-js and fetched using API.
<br></br>
<br></br>
We are also working upon Wishlist and Watchlist as the add more feature here.
<br></br>
<br></br>
The aim of this website is that, we can watch advertisement free anime with add-on features.
<br></br>
Also you can learn and contribute more to this website, and so we've kept it as an opensource project 
<br></br>
<br></br>
Special Thanks to Riimuru :)
<br></br>
<br></br>

Made With Love For Anime Fans ♥ 
</main>
</div>
        </div>
        </div>
    )
}
export default About;