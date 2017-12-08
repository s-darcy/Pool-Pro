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
				</div> 
			);
		  }     
	  }  
	  export default DropDownMenu;