import React, { Component } from 'react';

class DropDownMenu extends Component {

	// const list = props.cardList.map((card, index) => {
	// 	if (something) {
	// 		render (
	// 			// render some html data
	// 		) else {
	// 			render (
	// 				// render something else
	// 			)
	// 		}
	// 	}
	// })
	
		render(){

			return (
				<div>
					<div className="row">
						<div className="columns small-offset-1">
							<form className="hero__form" method="GET">    
								<nav>
									<ul>
										<li>
											<a href="#">
												<input type="checkbox" value="Service"/>
												<label className="hero__options--item" htmlFor="Service">Service</label>
											</a>
										</li> 
										<li>
											<a href="#">
												<input type="checkbox" value="Installation"/>
												<label className="hero__options--item" htmlFor="Installation">Installation</label>
											</a>
										</li> 
										<li>
											<a href="#">
												<input type="checkbox" value="Residential"/>
												<label className="hero__options--item" htmlFor="Residential">Residential</label>
											</a>
										</li> 
										<li>
											<a href="#">
												<input type="checkbox" value="Commercial"/> 
												<label className="hero__options--item"  htmlFor="Commercial">Commercial</label>
											</a>
										</li>
									</ul>
								</nav>  
							</form>
						</div>{/* /.columns */}
					</div>{/* /.row */}   
				</div> 
			);
		  }     
	  }  
	  export default DropDownMenu;