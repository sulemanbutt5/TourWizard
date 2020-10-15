import React from 'react'

function Footer() {
    return (
    <div id="foot">
		<hr/>
		<br/>
		<div>
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="card">
						  <div class="card-header">About Tour Wizard</div>
						  <div class="card-body">Tour Wizard is a web application that provides a platform to reduce the 
												 communication gap between the tour agencies and customers to promote tourism</div> 
						</div>
					</div>
					<div class="col-md-4">
						<div class="card" >
						  <div class="card-header" >Contact Info</div>
						  <div class="card-body">
							<div class="block-5 mb-5">
							  <ul class="list-unstyled">
								<li><img src="images/location.png" alt=""/>{" "}{" "} PUCIT, New Campus</li><br/>
								<li><img src="images/telephone.png" alt=""/>{" "}{" "}{" "}Phone : +92 323 438 3332</li><br/>
								<li><img src="images/envelope.png" alt=""/>{" "}{" "}{" "}Mail : tourwizard@info.com</li>
							  </ul>
							</div>
						  </div> 
						</div>
					</div>
					<div class="col-md-4">
						<div class="card">
						  <div class="card-header" >Quick Links</div>
						  <div class="card-body">
							<div class="block-5 mb-5">
							  <ul class="list-unstyled">
								<li>Home</li>
								<li>Group Tours</li>
								<li>About Us</li>
								<li>Sign Up</li>
								<li>Login</li>
							  </ul>
							</div>
						  </div> 
						</div> 
					</div>
					<br/>
					<div class="card" >
					  <div class="card-body">Copyrights &copy; 2020 Tour Wizard. All Rights Reserved</div> 
					</div>
				</div>										
			</div>
		</div>			
	</div>
    )
}

export default Footer
