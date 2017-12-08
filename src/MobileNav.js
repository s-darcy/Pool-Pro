import React, { Component } from 'react';

class MobileNav extends Component {
	
		render(){

			return (
				<div>
					<div className="mobile-nav  row">
                        <div className="columns small-offset-4 small-3">
                            <h2 className="mobile-nav__header  text-center">Menu</h2>
                        </div>
                        <div className="columns small-1 small-offset-3">        
                            <button onClick={(event) => {this.props.mobileNavClick(event)}} className="mobile-nav__exit">X</button>
                        </div> 
                        <ul>
                            <div className="mobile-nav__item-row  columns">
                                <div className="columns small-offset-1 small-6">
                                    <li className="mobile-nav__item">Pool & Spas</li>
                                </div>
                                <div className="columns small-3 end">    
                                    <a className="mobile-nav__next" href="#">next</a>
                                </div>
                            </div>
                            <div className="mobile-nav__item-row  columns">
                                <div className="columns small-offset-1 small-6">
                                    <li className="mobile-nav__item">Supplies</li>
                                </div>
                                <div className="columns small-3 end">    
                                    <a className="mobile-nav__next" href="#">next</a>
                                </div>
                            </div>
                            <div className="mobile-nav__item-row  columns">
                                <div className="columns small-offset-1 small-6">
                                    <li className="mobile-nav__item">Resources</li>
                                </div>
                                <div className="columns small-3 end">    
                                    <a className="mobile-nav__next" href="#">next</a>
                                </div>
                            </div>
                            <div className="mobile-nav__item-row  columns">
                                <div className="columns small-offset-1 small-6">
                                    <li className="mobile-nav__item">Services</li>
                                </div>
                                <div className="columns small-3 end">    
                                    <a className="mobile-nav__next" href="#">next</a>
                                </div>
                            </div>
                        </ul>    
					</div>{/* /.row */}   
				</div> 
			);
		  }     
	  }  
	  export default MobileNav;