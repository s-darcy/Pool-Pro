import React, { Component } from 'react';

class Card extends Component {
	
		render(){

			return (
                <div>
                    <div className="card-section columns medium-4">
                        <div className="cards">
                            <h2 className="cards__header text-center" >{this.props.dealersData.data.name}</h2>
                            <div className="text-center">
                                <button className="cards__phone text-center">
                                    <a href="#" type="button">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span className="text-center">Tap to call</span>
                                    {this.props.dealersData.data.phone1}
                                    </a>
                                </button> 
                            </div>     
                            <p className="cards__text text-center">Can’t talk now? Click below to send an email.</p>
                            <div className="text-center">
                                <button id="myBtn" onClick={(event) => {this.props.emailClick(event)}} className="cards__contact-button  hidden-for-medium-up text-center"><i className="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
                                <button id="myBtn" onClick={(event) => {this.props.emailClick(event)}} className="cards__contact-button  hidden-for-small-only text-center"><i className="fa fa-envelope" aria-hidden="true"></i>Contact this Pro</button>
                            </div>
                            <h3 className="cards__business-hours--header  text-center">Business Hours</h3>
                            <ul>
                                <li className="cards__business-hours--item  text-center">Weekdays {this.props.dealersData.data.weekHours.mon}</li>
                                <li className="cards__business-hours--item  text-center">Saturdays {this.props.dealersData.data.weekHours.sat}</li>
                                <li className="cards__business-hours--item  text-center">Sundays - On Call</li>
                            </ul>
                            <div className="cards__services--group">
                                <ul >
                                
                                    {/* <i className="fa fa-star" aria-hidden="true"></i> */}
                                        
                                            <li className="cards__services--block">
                                            {this.props.dealersData.data.certifications.map((certification, i) => 
                                                <a className="cards__services" href="#">
                                                    {certification}</a>)}
                                                
                                            </li>


                                {/* // <li>
                                //     <a className="cards__services" href="#">
                                //     <i className="fa fa-cog" aria-hidden="true"></i>
                                //         Service Pro
                                //     </a>   
                                // </li>
                                // < br/>   
                                // <li>
                                //     <a className="cards__services" href="#">
                                //     <i className="fa fa-home" aria-hidden="true"></i>
                                //         Residential Pro
                                //     </a>   
                                // </li>
                                // <li>
                                //     <a className="cards__services" href="#">
                                //     <img className="cards__services--users" alt="Pool Pros Logo" src="/img/users.svg" />
                                //         Commercial Pro
                                //     </a>   
                                // </li>*/}
                                </ul> 
                            </div>{/* /.card__services--group */}  
                        </div>{/* /.cards */}  
                    </div>{/* /.card-section */}
                </div>      
			);
		  }     
	  }  
	  export default Card;