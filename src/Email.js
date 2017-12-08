import React, { Component } from 'react';

class Email extends Component {
	
		render(){

			return (
                <div>
                    <div id="myModal" className="email">
                        <div className="email__top-row">
                            <div className="row">
                                <div className="columns"> 
                                    <div className="columns small-3">        
                                        <h2 className="email__header  text-center">EMAIL</h2>
                                    </div>
                                    <div className="columns small-1">
                                        <button onClick={(event) => {this.props.emailClick(event)}} className="email__exit">X</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">        
                                <div className="columns">
                                    <h3 className="email__company-name">Premium Pools & Spas of Charlotte</h3>
                                </div>
                            </div>    
                        </div>{/* /.row */} 
                        <div className="row">
                            <div className="columns">
                                <p className="email__instructions">Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.</p>
                            </div>
                            <form method="POST">
                                <label className="email__label">First and last name</label>
                                <input className="email__input--name" type="text" placeholder="Jane Smith"/>
                                <label className="email__label">Phone number</label>
                                <input type="text" className="email__input--phone"/>
                                <label className="email__label">Email address</label>
                                <input type="text" className="email__input--email"/>
                                <span className="email__optional">optional</span>
                                <textarea className="email__input--comment" rows="2" cols="50">
                                </textarea>   
                                <div>
                                    <p>Do you currently own a pool or spa?</p>
                                    <button>Yes</button>
                                    <button>No</button>
                                </div>     
                                <input type="submit" value="Send my email >" />
                            </form> 
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>   
                        </div>          
                    </div>
                </div>      
			);
		  }     
	  }  
	  export default Email;