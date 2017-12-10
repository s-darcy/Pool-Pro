import React, { Component } from 'react';

class Email extends Component {
	
		render(){

			return (
                <div>
                    <div id="myModal" className="email">
                        <div className="email__top-row">
                            <div className="row">
                                <div> 
                                    <div className="columns small-3">        
                                        <h2 className="email__header  text-center">EMAIL</h2>
                                    </div>{/* /.columns */} 
                                    <div className="columns small-1">
                                        <button onClick={(event) => {this.props.emailClick(event)}} className="email__exit">X</button>
                                    </div>{/* /.columns */} 
                                </div>{/* /.columns */} 
                            </div>{/* /.row */} 
                            <div className="row">        
                                <div className="columns">
                                    <h3 className="email__company-name">Premium Pools & Spas of Charlotte</h3>
                                </div>{/* /.columns */}
                            </div>{/* /.row */}     
                        </div>{/* /.email__top-row"*/}
                        <div className="email__below-the-header">  
                            <div className="row">
                                <div className="columns">
                                    <p className="email__instructions">Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.</p>
                                    <form className="email__form" method="POST">
                                        <label className="email__label">First and last name
                                            <input className="email__accurate" type="checkbox" />
                                        </label>     
                                        <input className="email__input--name" type="text" placeholder="Jane Smith"/>
                                        <label className="email__label">Phone number
                                            <input className="email__accurate" type="checkbox" />
                                        </label>
                                        <input type="text" className="email__input--phone"/>
                                        <label className="email__label">Email address
                                            <input className="email__accurate" type="checkbox" />
                                        </label>
                                        <input type="text" className="email__input--email"/>
                                        <label className="email__label">Comments or questions<span className="email__optional">optional</span></label>
                                        <textarea className="email__input--comment" rows="2" cols="50">       
                                        </textarea>  
                                        <div className="email__question--section">
                                            <p className="email__question--the-question">
                                                Do you currently own a pool or spa?
                                                <span className="email__optional">optional</span>
                                            </p>
                                            <button className="email__question--yes">Yes</button>
                                            <button className="email__question--no">No</button>
                                        </div>     
                                        <button className="email__button  show-for-medium-up text-center">
                                            <input className="email__send-email  " type="submit" value="Send my email" />
                                            <i className="email__right-arrow  fa fa-chevron-right" aria-hidden="true"></i>
                                        </button>
                                        <input className="email__send-email--small  show-for-small-only" value="Send"/>
                                    </form> 
                                </div>{/* /.columns */} 
                            </div>{/* /.row */}         
                            <div className="email__subtext  row show-for-medium-up">
                                <div className="columns">        
                                    <p className="email__subtext--text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>   
                                </div>{/* /.columns */}           
                            </div>{/* /.email__subtext */}
                        </div>     
                    </div>    
                </div>      
			);
		  }     
	  }  
	  export default Email;