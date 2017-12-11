import React, { Component } from 'react';

class Card extends Component {
	
		render(){

			return (
                <div>
                    <div className="card-section columns medium-4">
                        <div className="cards text-center">
                            <h2 className="cards__header text-center" >{this.props.dealersData.data.name}</h2>
                            <button className="cards__phone text-center">
                                <a href="#" type="button">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                <span className="text-center">Tap to call</span>
                                1.888.888.8888
                                </a>
                            </button>  
                            <p className="cards__text text-center">Can’t talk now? Click below to send an email.</p>
                            <button id="myBtn" onClick={(event) => {this.props.emailClick(event)}} className="cards__contact-button  hidden-for-medium-up text-center"><i className="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
                            <button id="myBtn" onClick={(event) => {this.props.emailClick(event)}} className="cards__contact-button  hidden-for-small-only text-center"><i className="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
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
                        </div>{/* /.cards */}  
                    </div>{/* /.card-section */}
                </div>      
			);
		  }     
	  }  
	  export default Card;