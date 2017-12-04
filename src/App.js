import React, { Component } from 'react';
import './assets/css/styles.css';

class App extends Component {
  render() {
    return (
    <div>  
      <header>

        <div className="top-nav__mobile-only  show-for-small-only">
          <img alt="Pool Pros Logo" src="/img/pool-pros-logo.png" />
          <button className="top-nav__button">
            <a href="#" Find a Pool Pro><i class="fa fa-map-marker" aria-hidden="true"></i> FIND A PRO</a>
          </button>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
          
        <div className="top-nav__top-bar  row">
            <div className="columns medium-offset-7 medium-5 end">
                <nav>
                    <ul className="text-center show-for-medium-up inline-list">
                        <li >
                          <a className="top-nav__top-bar--list-items" href="#">Dealers and Distributors</a>
                        </li>
                        <li>
                          <a className="top-nav__top-bar--list-items" href="#">Commercial Service</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="row show-for-medium-up">
            <div className="columns medium-3">
                <img alt="Pool Pros Logo" src="/img/pool-pros-logo.png" />
            </div>
            <div className="columns medium-5 medium-offset-2">
                <nav>
                    <ul className="top-nav__second-level  inline-list">
                        <li><a href="#">Pools & Spas</a></li>
                        <li><a href="#">Supplies</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </nav>
            </div>
            <div className="columns medium-2">
                <button className="top-nav__button">
                  <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> FIND A POOL PRO</a>
                </button>
            </div>
          </div>
        </header>

        <main>
          <section className="section hero">
            <div className="row">
                <div className="columns">

                </div>
            </div>
            <div className="row">
                <div className="columns large-offset-2 large-2">
                    <p>7 dealers in 28226</p>
                </div>
                <div className="columns medium-7 end">
                  <h2>Filter Results</h2>
                  <form className="">
                      <input type="radio" value="Service"/> Service 
                      <input type="radio" value="Installation"/> Installation 
                      <input type="radio" value="Residential"/> Residential 
                      <input type="radio" value="Commercial"/> Commercial 
                  </form>
                </div>
              </div>
          </section>
          <section>
          <div class="row">
           <div class="columns medium-4">
               <h2>Aqua Experts</h2>
               <a href="#"><i className="fa fa-phone" aria-hidden="true"></i>1.888.888.8888</a>
               <p>Can’t talk now? Click below to send an email.</p>
               <button><i class="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
               <h3>Business Hours</h3>
               <ul>
                   <li>Weekdays 7:00am - 7:00pm</li>
                   <li>Saturdays 7:00am - 3:00pm</li>
                   <li>Sundays - On Call</li>
               </ul>
               <ul className="inline-list">
                   <li>
                    <a href="#">
                      <i class="fa fa-star" aria-hidden="true"></i>
                       Installation Pro
                    </a>   
                   </li>
                   <li>
                    <a href="#">
                      <i class="fa fa-cog" aria-hidden="true"></i>
                       Service Pro
                    </a>   
                   </li>
                < br/>   
                   <li>
                    <a href="#">
                    <i class="fa fa-home" aria-hidden="true"></i>
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
              </div>    
          </div>
       </section>   
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
              <ul>
                <li><a href="#">Dealers and Distributors</a></li>
                <li><a href="#">Commercial Service </a></li>
              </ul>  
            </div>      
          </div>  
        </div>  
      </footer>  
    </div>  
    );
  }
}

export default App;
