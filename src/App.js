import React, { Component } from 'react';
import { Toggle } from "react-powerplug";

import './assets/css/styles.css';
import './assets/js/project.js';
import DropDownMenu from './DropDownMenu';
import MobileNav from './MobileNav';
import Email from './Email';
class App extends Component {

  constructor() {
    super();
    this.state = {

      dropDown : false,
      mobileNavClicked : false,
      emailClicked : false,

    }; 

    this.dropDownClick = this.dropDownClick.bind(this);
    this.mobileNavClick = this.mobileNavClick.bind(this);
    this.emailClick = this.emailClick.bind(this);
   
  }//Constructor Binding State

    dropDownClick = (event) => {
      event.preventDefault();
        this.setState({
          dropDown : !this.state.dropDown
        });
    };

    mobileNavClick = (event) => {
      event.preventDefault();
        this.setState({
          mobileNavClicked : !this.state.mobileNavClicked
        });
    };

    emailClick = (event) => {
      event.preventDefault();
        this.setState({
          emailClicked : !this.state.emailClicked
        });
    };

  render() {

    let mobileNavClicked = this.state.mobileNavClicked;
    let emailClicked = this.state.emailClicked;

    let dropDownMenu = <DropDownMenu />
    let mobileNav = <MobileNav 
      mobileNavClick={this.mobileNavClick}
    />
    let email = <Email 
      emailClick={this.emailClick}
    />

    return (
    <div>  
      <header>
{/* MOBILE ONLY */}        
        <div className="top-nav  row show-for-small-only">
          <img className="top-nav__logo  columns small-3" alt="Pool Pros Logo" src="/img/pool-pros-logo.png" />
          <button className="top-nav__button  columns small-offset-1 small-3 end">
            <a href="#" Find a Pool Pro><i className="fa fa-map-marker" aria-hidden="true"></i> FIND A PRO</a>
          </button>{/* /.top-nav__button */}
          <a href="#" onClick={(event) => {this.mobileNavClick(event)}}>
            <img className="top-nav__navigation-bars  columns small-2" alt="mobile navigation" src="/img/navigation-mobile.svg" />
          </a>
          
          
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
                  {this.state.mobileNavClicked && mobileNav}
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
                    {/* <Toggle>
                      {({ on, toggle }) => (
                        <a href="#" checked={on} onClick={toggle}>
                          <i className="hero__filter--drop-down-arrow  fa fa-sort-desc" aria-hidden="true"></i>
                        </a>
                      )}
                    </Toggle> */}
                      <a href="#" onClick={(event) => {this.dropDownClick(event)}}>
                       <i className="hero__filter--drop-down-arrow  fa fa-sort-desc" aria-hidden="true"></i>
                      </a>
                    </div>{/* /.columns */}
                </div>  
              </div>{/* /.hero__filter */}  
              {this.state.dropDown && dropDownMenu}
            </div>{/* /.hero__options */}
{/* MOBILE ONLY */} 

{/* DESKTOP and TABLET */}                 
            <div className="hero__options  show-for-medium-up">
              <div className="row">
                <div className="columns medium-2 large-2 large-offset-1">
                  <p className="hero__dealers">7 dealers in 28226</p>
                </div>{/* /.columns */}
                <div className="columns large-1 show-for-large-up">
                  <span></span>
                </div>{/* /.columns */}
                <div className="columns medium-3 large-2">      
                  <h2 className="hero__filter--header  show-for-medium-up">Filter Results</h2>              
                </div>{/* /.columns */}
                <div className="columns medium-7 large-6 end">   
                  <form className="hero__form" method="GET">    
                    <nav>
                      <ul className="inline-list">
                        <li>
                          <input  type="checkbox" value="Service" />
                          <label className="hero__options--item" htmlFor="Service">Service</label>
                        </li> 
                        <li>
                          <input type="checkbox" value="Installation" />
                          <label className="hero__options--item" htmlFor="Installation">Installation</label>
                        </li> 
                        <li>
                          <input type="checkbox" value="Residential"/>
                          <label className="hero__options--item" htmlFor="Residential">Residential</label>
                        </li> 
                        <li>
                          <input type="checkbox" value="Commercial"/> 
                          <label className="hero__options--item"  htmlFor="Commercial">Commercial</label>
                        </li>
                      </ul> 
                    </nav>  
                  </form>{/* /.hero__form */}
                </div>{/* /.columns */}
              </div>{/* /.row */} 
            </div>{/* /.hero__options */}
{/* DESKTOP and TABLET */}           
          </section>{/* /.hero */}

          <section>
          {this.state.emailClicked && email}
            <div className="row">
              <div className="card-section columns medium-4">
                <div className="cards text-center">
                  <h2 className="cards__header text-center">Aqua Experts</h2>
                  <button className="cards__phone text-center">
                    <a href="#" type="button">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span className="text-center">Tap to call</span>
                      1.888.888.8888
                    </a>
                  </button>  
                  <p className="cards__text text-center">Can’t talk now? Click below to send an email.</p>
                  <button id="myBtn" onClick={(event) => {this.emailClick(event)}} className="cards__contact-button  hidden-for-medium-up text-center"><i className="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
                  <button id="myBtn" onClick={(event) => {this.emailClick(event)}} className="cards__contact-button  hidden-for-small-only text-center"><i className="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
                  <h3 className="cards__business-hours--header ">Business Hours</h3>
                  <ul>
                      <li className="cards__business-hours--item  text-center">Weekdays 7:00am - 7:00pm</li>
                      <li className="cards__business-hours--item  text-center">Saturdays 7:00am - 3:00pm</li>
                      <li className="cards__business-hours--item  text-center">Sundays - On Call</li>
                  </ul>
                  <div className="cards__services--group">
                    <ul className="inline-list text-center">
                      <li>
                        <a className="cards__services" href="#">
                          <i className="fa fa-star" aria-hidden="true"></i>
                            Installation Pro
                        </a>   
                      </li>
                      <li>
                        <a className="cards__services" href="#">
                          <i className="fa fa-cog" aria-hidden="true"></i>
                            Service Pro
                        </a>   
                      </li>
                      < br/>   
                      <li>
                        <a className="cards__services" href="#">
                          <i className="fa fa-home" aria-hidden="true"></i>
                            Residential Pro
                        </a>   
                      </li>
                      <li>
                        <a className="cards__services" href="#">
                        <img className="cards__services--users" alt="Pool Pros Logo" src="/img/users.svg" />
                            Commercial Pro
                        </a>   
                      </li>
                    </ul>
                  </div>{/* /.card__services--group */}  
                </div>{/* /.columns */}    
              </div>{/* /.row */}
            </div>{/* /.cards */}  
          </section>{/* /.section */}

      </main>
      <footer>
        <div className="footer__top-section">
          <div className="row">
            <div className="columns medium-offset-4 medium-4 text-center">
              <img className="footer__logo  hide-for-medium-up" alt="Pool Pros Logo" src="/img/pool-pros-logo-footer.png" />
            </div>{/* /.columns */}
          </div>{/* /.row */}
          <div className="row">
            <div className="columns medium-offset-4 medium-2 small-6 small-offset-1 text-center">  
              <h3 className="footer__connect">CONNECT WITH US</h3>
            </div>{/* /.columns */}
            <div className="columns medium-3 small-5 text-center end">     
              <ul className="inline-list">
                <li><a href="#"><i className="footer__social-media  fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="footer__social-media  fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="footer__social-media  fa fa-youtube-square" aria-hidden="true"></i></a></li>
              </ul>  
            </div>{/* /.columns */}
          </div>{/* /.row */}
        </div>{/* /.footer__top-section*/} 
        <div className="footer__second-section">
          <div className="footer__second-section--mobile-only   show-for-small-only"> 
            <div className="row"> 
              <ul className="inline-list">
                <div className="columns small-5 small-offset-1  text-center">
                  <li><a className="footer__second-section--option" href="#">Dealers and Distributors</a></li>
                </div>{/* /.columns */}
                <div className="columns small-1">
                  <span className="footer__second-section--divider">|</span>
                </div>{/* /.columns */} 
                <div className="columns small-5 text-center end">  
                  <li><a className="footer__second-section--option"  href="#">Commercial Service </a></li>
                </div>{/* /.columns */}  
              </ul>       
            </div>{/* /.row */}
          </div>{/* /.footer__second-section--mobile-only */}
        </div>{/* /.footer__second-section--mobile-only */}
        <div className="footer__third-section">     
          <div className="row">
          <div className="columns  medium-6 medium-offset-3 large-5 large-offset-4 text-center">   
            <ul className="inline-list text-center">
                <li><a className="footer__third-section--option  footer__pool-pros"  href="#"><i className="fa fa-copyright" aria-hidden="true"></i> 2017 Pool Pros</a><span className="footer__third-section--divider">|</span></li>
                <li><a className="footer__third-section--option"  href="#">Privacy Policy</a><span className="footer__third-section--divider">|</span></li>
                <li><a className="footer__third-section--option"  href="#">Terms and Conditions</a></li>
            </ul> 
            </div>{/* /.columns */}   
          </div>{/* /.row */}
        </div>{/* /.footer__third-section */}   
      </footer> 
    </div>
    );

  }

}

export default App;
