import { useState, useEffect } from "react";

import "./Navbar.css"

function Navbar() {
     const key = "isDarkMode"
     const [isDark, setIsDark] = useState(() => {
          try {
               const item = window.localStorage.getItem(key) // Getting from local storage by key
               return item ? JSON.parse(item) : undefined   // JSON.parse converts from Sting to Boolean
          }
          catch (error) {
               return false
          }
     })

     // Check if user has any preference in the local storage.
     // If not then load the system preference
     const darkModeEnabled = typeof isDark !== "undefined"
          ? isDark
          : window.matchMedia("(prefers-color-scheme: dark)").matches

     //Dark mode
     useEffect(() => {
          const className = "dark"
          if (darkModeEnabled) {
               window.document.body.classList.add(className)
          }
          else {
               window.document.body.classList.remove(className)
          }
          try {
               window.localStorage.setItem(key, darkModeEnabled) // Setting in local storage by key
          }
          catch (e) {
               console.error("Error in setting preference")
          }
     }, [darkModeEnabled])

     return (
          <div className="navbar">
               <a href="/" className="navbar-title">AniWare</a>

               <div className="nav-links">
                    {isDark ? (
                         <svg onClick={() => setIsDark(!isDark)} className="dark-mode" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 385">
                              <g id="Group_2" data-name="Group 2" transform="translate(-4442 -1720)">
                                   <g id="Group_1" data-name="Group 1" transform="translate(-15 74)">
                                        <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                                   </g>
                                   <g id="_-Product-Icons" data-name="🔍-Product-Icons" transform="translate(4440 1718)">
                                        <g id="ic_fluent_dark_theme_24_filled" transform="translate(2 2)">
                                             <path id="_-Color" data-name="🎨-Color" d="M194.5,387C300.814,387,387,300.814,387,194.5S300.814,2,194.5,2,2,88.185,2,194.5,88.185,387,194.5,387Zm0-38.5V40.5a154,154,0,1,1,0,308Z" transform="translate(-2 -2)" />
                                        </g>
                                   </g>
                              </g>
                         </svg>
                    ) : (
                         <svg onClick={() => setIsDark(!isDark)} className="light-mode" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 385">
                              <g id="Group_2" data-name="Group 2" transform="translate(-4442 -1720)">
                                   <g id="Group_1" data-name="Group 1" transform="translate(-15 74)">
                                        <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                                   </g>
                                   <g id="_-Product-Icons" data-name="🔍-Product-Icons" transform="translate(4440 1718)">
                                        <g id="ic_fluent_dark_theme_24_filled" transform="translate(2 2)">
                                             <path id="_-Color" data-name="🎨-Color" d="M194.5,387C300.814,387,387,300.814,387,194.5S300.814,2,194.5,2,2,88.185,2,194.5,88.185,387,194.5,387Zm0-38.5V40.5a154,154,0,1,1,0,308Z" transform="translate(-2 -2)" />
                                        </g>
                                   </g>
                              </g>
                         </svg>
                    )}
               </div>
          </div >
     )
}

export default Navbar