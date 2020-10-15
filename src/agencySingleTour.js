import React from 'react'
import Footer from './Footer'
import SignupForm from './SignupFormModal'
import LoginForm from './LoginFormModal'
import ForgotPassForm from './ForgotPasswordFromModal'
function agencySingleTour() {
    return (
        <div>
        	<div>

{/*	<!-----------------------------------------Login Form Modal---------------------------------------------------->	*/}
				<LoginForm/>
{/* <!-----------------------------------------Forgot password Form Modal---------------------------------------------------->	 */}
				<ForgotPassForm/>
{/*	<!--------------------------------------Sign Up Modal Form----------------------------------------------->*/}
				
				<SignupForm/>
		
{/*	<!------------------------------------Body--------------------------------------------------------------->*/}
					<br/><br/>
				
					<div class="container">										
						<div class="row">
							<div class="card" >
							  <img class="card-img-top" src="images/sample.png" height="300px" alt=""/>
							</div>
						</div>
						
						<div class="row">
							<div class="card" >
							  <div class="card-body">
								<h4 class="card-title"><img src="images/umbrella.png" alt=""/>{" "} Description</h4>
								<p class="card-text"><span >Destination:</span> 
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}<em>Beirut</em> <br/>
								<span >Duration:</span> 
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}<em>5 Days</em>
								<br/>
								<span >Package Price:</span> 
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}<em>PKR 12000</em>
								<br/>
								<span >For Booking</span> 
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
								{" "}{" "}{" "}{" "}{" "}<em>92 300 2314 345</em></p>
								
							  </div>
							</div>
						</div>
						
						<div class="row">
							
							<div class="card" >
							  <div class="card-body" >
								<h4 class="card-title" >Package Inclusions</h4>
								<p class="card-text" >
								
									<img src="images/success.png" alt=""/>{" "}{" "} All inclusive package <br/>
									<img src="images/success.png" alt=""/>{" "}{" "} Air tickets emirates airline visa <br/>
									<img src="images/success.png" alt=""/>{" "}{" "} Luxury transport <br/>
									<img src="images/success.png" alt=""/>{" "}{" "} All tours <br/>
									<img src="images/success.png" alt=""/>{" "}{" "} All meals at fine dining restaurants <br/>
									<img src="images/success.png" alt=""/>{" "}{" "} 4 star luxury hotel in downtown <br/>
								
								</p>
							  </div>
							</div>
						</div>
						<div class="row">
							
							<div class="card" >
							  <div class="card-body" >
								<h4 class="card-title" >Full Plan</h4>
								<p class="card-text">
									
									<br/><br/><br/><br/><br/><br/><br/><br/>
								
								</p>
							  </div>
							</div>
						</div>
						<div class="row">
							<div class="card" >
								<div >Departure Date : 25 October 2019</div>
							</div>
						</div>
						
						<div class="row col-md-12" >
							<div class="col-md-2">
								<button class="btn btn-danger">DELETE EVENT</button>
							</div>
							<div class="col-md-2 offset-md-1">
								<button class="btn btn-info" >EDIT EVENT</button>
							</div>
						</div>
					</div>
					<br/><br/>
			
	
	
{/*	<!-- -------------------------------footer------------------------------------------------------------- -->	*/}
		<Footer/>
	</div>
        </div>
    )
}

export default agencySingleTour
