import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'

function Footer() {
    return (
    <div id="foot">
		<hr/>
		<br/>
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="card">
						  <div className="card-header" style={{background:'lightgrey'}}>About Tour Wizard</div>
						  <div className="card-body">Tour Wizard is a web application that provides a platform to reduce the 
												 communication gap between the tour agencies and customers to promote tourism</div> 
						</div>
					</div>
					<div className="col-md-4">
						<div className="card" >
						  <div className="card-header"  style={{background:'lightgrey'}}>Contact Info</div>
						  <div className="card-body">
							<div className="block-5 mb-5">
							  <ul className="list-unstyled">
								<li><IoLocationSharp size={20} style={{fill: '#4a4646'}}/><div>{`   PUCIT, New Campus`}</div></li><br/>
								<li><AiFillPhone size={20} style={{fill: '#4a4646'}}/><div>{`   Phone : +92 323 438 3332`}</div></li><br/>
								<li><FaEnvelope size={20} style={{fill: '#4a4646'}}/><div>{`   Mail : tourwizard@info.com`}</div></li>
							  </ul>
							</div>
						  </div> 
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
						  <div className="card-header" style={{background:'lightgrey'}}>Quick Links</div>
						  <div className="card-body">
							<div className="block-5 mb-5">
							  <ul className="list-unstyled">
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
					<div className="card" >
					  <div className="card-body">Copyrights &copy; 2020 Tour Wizard. All Rights Reserved</div> 
					</div>
				</div>										
			</div>
		</div>			
	</div>
    )
}

export default Footer
