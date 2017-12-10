import React, { Component } from 'react';

class DropDownMenu extends Component {
	
		render(){

			return (
				<div>
					<div className="row">
						<div className="columns small-offset-1">
							<div className="hero__form"> 
								<ul>
									<li>
										<input 
											onClick={(event) => {this.props.serviceClick(event)}}  
											type="checkbox" value="Service"
										/>


										<label className="hero__options--item" htmlFor="Service">Service</label>
									</li> 
									<li>
										<input onClick={(event) => {this.props.installationClick(event)}}  type="checkbox" value="Installation"/>
										<label className="hero__options--item" htmlFor="Installation">Installation</label>
									</li> 
									<li>
										<input onClick={(event) => {this.props.residentialClick(event)}}  type="checkbox" value="Residential"/>
										<label className="hero__options--item" htmlFor="Residential">Residential</label>
									</li> 
									<li>
										<input onClick={(event) => {this.props.commercialClick(event)}}  type="checkbox" value="Commercial"/> 
										<label className="hero__options--item"  htmlFor="Commercial">Commercial</label>
									</li>
								</ul>
							</div>
						</div>{/* /.columns */}
					</div>{/* /.row */}   
				</div> 
			);
		  }     
	  }  
	  export default DropDownMenu;