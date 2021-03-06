import "./Sidebar.css"

function Sidebar() {
     return (
          <div className="sidebar">
               <div className="sidebar-top">
                    <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 385">
                         <g id="Group_2" data-name="Group 2" transform="translate(-4457 -1754)">
                              <g id="Group_1" data-name="Group 1" transform="translate(0 108)">
                                   <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                              </g>
                              <g id="list-button-svgrepo-com" transform="translate(4447.031 1754)">
                                   <g id="Group_3" data-name="Group 3" transform="translate(9.969)">
                                        <path id="Path_5" data-name="Path 5" d="M54.57,85.555h295.8c24.629,0,44.6-19.154,44.6-42.778S375,0,350.369,0H54.57c-24.63,0-44.6,19.154-44.6,42.778S29.939,85.555,54.57,85.555Z" transform="translate(-9.969)" />
                                        <path id="Path_6" data-name="Path 6" d="M350.369,189.778H54.57c-24.63,0-44.6,19.154-44.6,42.778s19.97,42.778,44.6,42.778h295.8c24.631,0,44.6-19.155,44.6-42.778S375,189.778,350.369,189.778Z" transform="translate(-9.969 -40.056)" />
                                        <path id="Path_7" data-name="Path 7" d="M350.369,379.557H54.57c-24.63,0-44.6,19.153-44.6,42.778s19.97,42.777,44.6,42.777h295.8c24.631,0,44.6-19.154,44.6-42.778S375,379.557,350.369,379.557Z" transform="translate(-9.969 -80.111)" />
                                   </g>
                              </g>
                         </g>
                    </svg>

                    <a href="/search">
                         <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 385">
                              <g id="Group_3" data-name="Group 3" transform="translate(-4334 -1665)">
                                   <g id="Group_1" data-name="Group 1" transform="translate(-123 19)">
                                        <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                                   </g>
                                   <g id="XMLID_17_" transform="translate(4334 1665)">
                                        <path id="XMLID_18_" d="M136.672,174.175A46.722,46.722,0,0,1,90,127.506a17.5,17.5,0,1,0-35,0,81.761,81.761,0,0,0,81.67,81.669,17.5,17.5,0,1,0,0-35Z" transform="translate(9.167 18.334)" />
                                        <path id="XMLID_19_" d="M379.874,355.126,260.551,235.8a145.127,145.127,0,0,0,31.129-89.963C291.68,65.423,226.256,0,145.839,0S0,65.423,0,145.839,65.423,291.678,145.839,291.678A145.129,145.129,0,0,0,235.8,260.551L355.126,379.874a17.5,17.5,0,0,0,24.747-24.747ZM35,145.839A110.84,110.84,0,1,1,145.839,256.678,110.965,110.965,0,0,1,35,145.839Z" />
                                   </g>
                              </g>
                         </svg>
                    </a>
               </div>

               <div className="sidebar-middle">
                    <a href="/animes">
                         <svg className="popular-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 388">
                              <g id="Group_2" data-name="Group 2" transform="translate(-4457 -1751)">
                                   <g id="Group_1" data-name="Group 1" transform="translate(0 107)">
                                        <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                                   </g>
                                   <g id="fire-svgrepo-com" transform="translate(4438.294 1751)">
                                        <path id="Path_5" data-name="Path 5" d="M332.407,307.54a47.589,47.589,0,0,0,1.18,9.5s-2.434,66.178-94.668,70.723-112.794-59.124-112.794-59.124c-8.2-34.251,8.595-19.485-6.118-38.732C94.144,259.2,52.342,246.659,77.442,201.549c13.9-20.548,28.379-13.312,30.713-47.945,24.983,37.93-51.368,54.705.466,89.267,12.67,6.743,42.291,10.374,46.641-40.242-.4-35.446-52.627-60.158-60.457-102.495C85,59.344,115.852,42.127,118.65,0c.652,57.441-23.021,53.315-8.64,97.446,12.837,42.456,63.206,40.464,82.852,91.288C215.08,241.719,149.952,264.27,200.6,293.4c15.71,9.441,49.866-7.575,18.432-54.312-11.026-20.235-15.906-24.929-14.314-45.9,3.3-25.331,25.007-23.538,21.155-60.572,25.747,28.149-15.564,47.732,2.707,93.971,5.265,13.659,47.547,42.62,55.62-22.376,1.308-69.44-79.652-72.069-44.926-160.438-24.688,64.669,43.6,68.951,61.21,115.842,19.577,51.183-7.745,72.461-10.209,105.7-3.778,27.422,41.147,40.261,44.93-2.191,1.317-21.727-28.135-25.834-18.758-52.651.489,25.01,29.287,24.846,35.869,50.022C356.924,283.507,336.355,291.576,332.407,307.54Z" transform="translate(0)" />
                                   </g>
                              </g>
                         </svg>
                    </a>

                    <a href="/latest">
                         <svg className="latest-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 385">
                              <g id="Group_2" data-name="Group 2" transform="translate(-4457 -1753)">
                                   <g id="Group_1" data-name="Group 1" transform="translate(0 107)">
                                        <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                                   </g>
                                   <path id="play-svgrepo-com" d="M134.707,457a37,37,0,0,1-18.308-4.886C103.845,445,96.04,431.189,96.04,416.2V112.8c0-15.034,7.8-28.8,20.359-35.916a36.753,36.753,0,0,1,37.422.471l259.3,155.213a37.663,37.663,0,0,1,0,63.818L153.779,451.642A37.14,37.14,0,0,1,134.707,457Z" transform="translate(4385.96 1681.002)" />
                              </g>
                         </svg>
                    </a>

                    <a href="/genres">
                         <svg className="genre-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 385">
                              <g id="Group_2" data-name="Group 2" transform="translate(-4442 -1720)">
                                   <g id="Group_1" data-name="Group 1" transform="translate(-15 74)">
                                        <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                                   </g>
                                   <g id="stars-svgrepo-com" transform="translate(4451.9 1718)">
                                        <path id="Path_5" data-name="Path 5" d="M122.076,202.521c10.694-56.146,25.4-70.851,81.545-81.545,6.684-1.337,10.694-6.684,10.694-13.368S210.3,95.576,203.621,94.24c-56.146-10.694-70.851-25.4-81.545-81.545C120.739,6.01,115.392,2,108.708,2S96.676,6.01,95.34,12.694C84.645,68.84,69.94,83.545,13.794,94.24,8.447,95.576,3.1,100.924,3.1,107.608s4.01,12.031,10.694,13.368c56.146,10.694,70.851,25.4,81.545,81.545,1.337,6.684,6.684,10.694,13.368,10.694S120.739,207.868,122.076,202.521Z" transform="translate(0)" />
                                        <path id="Path_6" data-name="Path 6" d="M155.575,83.367c-37.431-8.021-45.451-16.042-53.472-53.472C100.766,23.21,95.419,19.2,88.735,19.2S76.7,23.21,75.367,29.894C67.346,67.325,59.325,75.346,21.894,83.367,15.21,84.7,11.2,90.051,11.2,96.735s4.01,12.031,10.694,13.368c37.431,8.021,45.451,16.042,53.472,53.472,1.337,6.684,6.684,10.694,13.368,10.694s12.031-4.01,13.368-10.694c8.021-37.431,16.042-45.451,53.472-53.472,6.684-1.337,10.694-6.684,10.694-13.368S160.922,84.7,155.575,83.367Z" transform="translate(100.181 212.731)" />
                                        <path id="Path_7" data-name="Path 7" d="M140.512,62.235C111.1,56.888,104.419,50.2,99.072,20.794,97.735,14.11,92.388,10.1,85.7,10.1S73.672,14.11,72.335,20.794C66.988,50.2,60.3,56.888,30.894,62.235,24.21,63.572,20.2,68.919,20.2,75.6s4.01,12.031,10.694,13.368C60.3,94.319,66.988,101,72.335,130.413c1.337,6.684,6.684,10.694,13.368,10.694s12.031-4.01,13.368-10.694C104.419,101,111.1,94.319,140.512,88.972c6.684-1.337,10.694-6.684,10.694-13.368S147.2,63.572,140.512,62.235Z" transform="translate(211.494 100.181)" />
                                        <path id="Path_8" data-name="Path 8" d="M26.726,26.061c-4.01-4.01-9.358-5.347-14.7-2.674-1.337,0-2.674,1.337-4.01,2.674s-2.674,2.674-2.674,4.01C4,31.408,4,34.081,4,35.418s0,4.01,1.337,5.347,1.337,2.674,2.674,4.01,2.674,2.674,4.01,2.674c1.337,1.337,4.01,1.337,5.347,1.337s4.01,0,5.347-1.337,2.674-1.337,4.01-2.674S29.4,42.1,29.4,40.765c1.337-1.337,1.337-4.01,1.337-5.347s0-4.01-1.337-5.347C29.4,28.734,28.063,27.4,26.726,26.061Z" transform="translate(11.131 247.311)" />
                                        <path id="Path_9" data-name="Path 9" d="M40.368,31.427a12.136,12.136,0,0,0,9.358-4.01,12.136,12.136,0,0,0,4.01-9.358A12.136,12.136,0,0,0,49.726,8.7c-1.337-1.337-2.674-2.674-4.01-2.674-2.674-1.337-6.684-1.337-10.694,0-1.337,0-2.674,1.337-4.01,2.674A12.136,12.136,0,0,0,27,18.059a12.136,12.136,0,0,0,4.01,9.358A12.136,12.136,0,0,0,40.368,31.427Z" transform="translate(295.597 37.413)" />
                                   </g>
                              </g>
                         </svg>
                    </a>
               </div>

               <div className="sidebar-bottom">
                    <a href="/wishlist">
                         <svg className="wishlist-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 385">
                              <g id="Group_3" data-name="Group 3" transform="translate(-4334 -1665)">
                                   <g id="Group_1" data-name="Group 1" transform="translate(-123 19)">
                                        <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                                   </g>
                                   <g id="heart-svgrepo-com" transform="translate(4334 1659.5)">
                                        <path id="XMLID_810_" d="M353.072,59.672a109.13,109.13,0,0,0-154.5.081L192.622,65.7l-6.109-6.109A109.22,109.22,0,0,0,0,136.8a108.3,108.3,0,0,0,32.09,77.212l148.8,148.8A16.7,16.7,0,0,0,192.7,367.7a16.99,16.99,0,0,0,11.81-4.887l148.4-148.559a109.327,109.327,0,0,0,.163-154.586ZM107.917,100.558a35.42,35.42,0,0,0-35.348,35.348,16.208,16.208,0,1,1-32.416,0,67.782,67.782,0,0,1,67.682-67.682,16.2,16.2,0,0,1,16.208,16.208A16.008,16.008,0,0,1,107.917,100.558Z" transform="translate(0 0)" />
                                   </g>
                              </g>
                         </svg>
                    </a>

                    <a href="/about">
                         <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 385 385">
                              <g id="Group_2" data-name="Group 2" transform="translate(-4457 -1754)">
                                   <g id="Group_1" data-name="Group 1" transform="translate(0 108)">
                                        <rect id="Rectangle_12" data-name="Rectangle 12" width="385" height="385" transform="translate(4457 1646)" fill="none" />
                                   </g>
                                   <g id="info-svgrepo-com" transform="translate(4457 1754)">
                                        <path id="Path_5" data-name="Path 5" d="M192.5,0C86.355,0,0,86.355,0,192.5S86.353,385,192.5,385,385,298.645,385,192.5,298.644,0,192.5,0Zm0,337.921c-80.186,0-145.421-65.235-145.421-145.421S112.314,47.079,192.5,47.079,337.921,112.314,337.921,192.5,272.684,337.921,192.5,337.921Z" />
                                        <rect id="Rectangle_13" data-name="Rectangle 13" width="47.079" height="123.974" transform="translate(168.961 171.315)" />
                                        <rect id="Rectangle_14" data-name="Rectangle 14" width="47.079" height="45.509" transform="translate(168.961 89.712)" />
                                   </g>
                              </g>
                         </svg>
                    </a>
               </div>
          </div>
     )
}

export default Sidebar