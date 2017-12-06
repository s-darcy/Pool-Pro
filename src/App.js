import React, { Component } from 'react';
import './assets/css/styles.css';

class App extends Component {
  render() {
    return (
    <div>  
      <header>
{/* MOBILE ONLY */}        
        <div className="top-nav  row show-for-small-only">
          <img className="top-nav__logo  columns small-3" alt="Pool Pros Logo" src="/img/pool-pros-logo.png" />
          <button className="top-nav__button  columns small-offset-1 small-3 end">
            <a href="#" Find a Pool Pro><i className="fa fa-map-marker" aria-hidden="true"></i> FIND A PRO</a>
          </button>{/* /.top-nav__button */}
          <img className="top-nav__navigation-bars  columns small-2" alt="mobile navigation" src="/img/navigation-mobile.svg" />
        </div>{/* /.top-nav */}
{/* MOBILE ONLY */}  

{/* DESKTOP and TABLET */}            
        <div className="top-nav  row">
            <div className="top-nav__top-bar  columns medium-offset-7 medium-5 large-offset-8 large-8 end">
                <nav>
                    <ul className="show-for-medium-up text-center inline-list">
                        <li >
                          <a className="top-nav__top-bar--list-items" href="#">Dealers and Distributors</a>
                        </li>
                        <li>
                          <a className="top-nav__top-bar--list-items" href="#">Commercial Service</a>
                        </li>
                    </ul>{/* /.show-for-medium-up */}
                </nav>
            </div>{/* /.columns */}
        </div> {/* /.top-nav__top-bar */}
        <div className="row show-for-medium-up">
            <div className="columns medium-3">
                <img className="top-nav__logo" alt="Pool Pros Logo" src="/img/pool-pros-logo.png" />
            </div>{/* /.columns */}
            <div className="columns medium-5 medium-offset-2">
                <nav>
                    <ul className="top-nav__second-level  inline-list">
                        <li><a href="#">Pools & Spas</a></li>
                        <li><a href="#">Supplies</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>{/* /.top-nav__second-level */}
                </nav>
            </div>{/* /.columns */}
            <div className="columns medium-2">
                <button className="top-nav__button">
                  <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> FIND A POOL PRO</a>
                </button>{/* /.top-nav__button */}
            </div>{/* /.columns */}
          </div>{/* /.row */}
{/* DESKTOP and TABLET */}            
        </header>

        <main>
          <section className="section hero">
            <div className="row">
              <div className="columns">
                  <img className="hero__background-image  show-for-small-only" alt="Pool Pros Logo" src="/img/water-image.jpg" />
              </div>
            </div>

{/* MOBILE ONLY */}             
            <div className="hero__options  show-for-small-only">
              <div className="hero__filter">  
                <div className="row">
                  <div className="columns small-6 small-offset-1">
                    <p className="hero__dealers">7 dealers in 28226</p>
                  </div>{/* /.columns */}
                  <div className="columns small-4 inline-list">
                    <h2 className="hero__filter--header  show-for-small-only">Filter Results</h2>
                  </div>
                  <div className="columns small-1 end">   
                    <i className="hero__filter--drop-down-arrow  fa fa-sort-desc" aria-hidden="true"></i>
                  </div>{/* /.columns */}
                </div>  
              </div>{/* /.hero__filter */}  
              <div className="row">
                <div className="columns small-offset-1">
                  <form className="hero__form" method="GET">    
                    <nav>
                      <ul>
                        <li>
                          <input type="radio" value="Service"/>
                          <label className="hero__options--item" htmlFor="Service">Service</label>
                        </li> 
                        <li>
                          <input type="radio" value="Installation"/>
                          <label className="hero__options--item" htmlFor="Installation">Installation</label>
                        </li> 
                        <li>
                          <input type="radio" value="Residential"/>
                          <label className="hero__options--item" htmlFor="Residential">Residential</label>
                        </li> 
                        <li>
                          <input type="radio" value="Commercial"/> 
                          <label className="hero__options--item"  htmlFor="Commercial">Commercial</label>
                        </li>
                      </ul> 
                    </nav>  
                  </form>
                </div>{/* /.columns */}
              </div>{/* /.row */}    
            </div>{/* /.hero__options */}
{/* MOBILE ONLY */} 

{/* DESKTOP and TABLET */}                 
            <div className="hero__options  show-for-medium-up">
              <div className="hero__filter  row">
                <div className="columns medium-offset-2 medium-4">
                  <p className="hero__dealers">7 dealers in 28226</p>
                </div>
                <div className="columns medium-7 end">      
                  <h2 className="hero__filter--header  show-for-medium-up">Filter Results</h2>              
                </div>{/* /.columns */}        
              </div>{/* /.row */}     
              <div className="row hidden-for-small-only">
                <div className="columns">
                  <form className="" method="GET">    
                    <nav>
                      <ul className="inline-list">
                        <li>
                          <input type="radio" value="Service"/>
                          <label className="hero__options--item" htmlFor="Service">Service</label>
                        </li> 
                        <li>
                          <input type="radio" value="Installation"/>
                          <label className="hero__options--item" htmlFor="Installation">Installation</label>
                        </li> 
                        <li>
                          <input type="radio" value="Residential"/>
                          <label className="hero__options--item" htmlFor="Residential">Residential</label>
                        </li> 
                        <li>
                          <input type="radio" value="Commercial"/> 
                          <label className="hero__options--item"  htmlFor="Commercial">Commercial</label>
                        </li>
                    </ul> 
                    </nav>  
                  </form>
                </div>{/* /.columns */}
              </div>{/* /.row */} 
            </div>{/* /.hero__options */}
{/* DESKTOP and TABLET */}           
          </section>{/* /.hero */}

          <section className="cards">
          <div className="row">
           <div className="columns medium-4">
               <h2>Aqua Experts</h2>
               <a href="#"><i className="fa fa-phone" aria-hidden="true"></i>1.888.888.8888</a>
               <p>Can’t talk now? Click below to send an email.</p>
               <button><i className="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
               <h3>Business Hours</h3>
               <ul>
                   <li>Weekdays 7:00am - 7:00pm</li>
                   <li>Saturdays 7:00am - 3:00pm</li>
                   <li>Sundays - On Call</li>
               </ul>
               <ul className="inline-list">
                   <li>
                    <a href="#">
                      <i className="fa fa-star" aria-hidden="true"></i>
                       Installation Pro
                    </a>   
                   </li>
                   <li>
                    <a href="#">
                      <i className="fa fa-cog" aria-hidden="true"></i>
                       Service Pro
                    </a>   
                   </li>
                < br/>   
                   <li>
                    <a href="#">
                    <i className="fa fa-home" aria-hidden="true"></i>
                       Residential Pro
                    </a>   
                   </li>
                   <li>
                    <a href="#">
                    <img className="" alt="Pool Pros Logo" src="/img/users.svg" />
                       Commercial Pro
                    </a>   
                   </li>
               </ul>
              </div>{/* /.columns */}    
          </div>{/* /.row */}
       </section>{/* /.cards */}

      </main>
      <footer>
        <div className="row">
          <div className="columns medium-offset-4 medium-4 text-center">
          <img alt="Pool Pros Logo" src="/img/pool-pros-logo-footer.png" />
            <div>
              <h3>CONNECT WITH US</h3>
              <ul className="inline-list">
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
              </ul>  
            </div>
            <div>
              <ul className="inline-list">
                <li><a href="#"><i class="fa fa-copyright" aria-hidden="true"></i> 2017 Pool Pros</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
              </ul> 
            </div>
            <div>
              <ul className="inline-list">
                <li><a href="#">Dealers and Distributors</a></li>
                <li><a href="#">Commercial Service </a></li>
              </ul>  
            </div>      
          </div>{/* /.columns */}  
        </div>{/* /.row */}  
      </footer>  
    </div>  
    );
  }
}

export default App;
