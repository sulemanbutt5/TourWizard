import React from 'react'
import {IoCheckmarkDoneOutline} from 'react-icons/io5'
import {MdDescription} from 'react-icons/md'

function agencySingleTour() {

	const icontextcenter={display: 'flex',alignItems: 'center',background:'lightgrey'}
    return (
        <div>
        	<div>
					<br/><br/>
					<div class="container">										
						<div class="row">
							<div class="card" >
							  <img class="card-img-top" src="images/sample.png" height="300px" alt=""/>
							</div>
						</div>
						<br/>
						<div class="row">
							<div class="card" >
							  <div class="card">
								<h4 class="card-header" style={icontextcenter}><MdDescription/>{" "} Description</h4>
								Destination: Beirut
								<br/>
								Duration: 5 Days
								<br/>
								Package Price: PKR 12000
								<br/>
								For Booking: 92 323 438 3332
								<br/>
							  </div>
							</div>
						</div>
						<br/>
						<div class="row">
							
							<div class="card" >
							  <div class="card" >
							    <h4 class="card-header" style={icontextcenter}>Package Inclusions</h4>
								<p class="card-text" >
								
									<IoCheckmarkDoneOutline style={{background:"lightgreen"}}/>All inclusive package <br/>
									<IoCheckmarkDoneOutline style={{background:"lightgreen"}}/>Air tickets emirates airline visa <br/>
									<IoCheckmarkDoneOutline style={{background:"lightgreen"}}/>Luxury transport <br/>
									<IoCheckmarkDoneOutline style={{background:"lightgreen"}}/>All tours <br/>
									<IoCheckmarkDoneOutline style={{background:"lightgreen"}}/>All meals at fine dining restaurants <br/>
									<IoCheckmarkDoneOutline style={{background:"lightgreen"}}/>4 star luxury hotel in downtown <br/>
								
								</p>
							  </div>
							</div>
						</div>
						<br/>
						{/* <div class="row">
							
							<div class="card" >
							  <div class="card-body" >
								<h4 class="card-title" >Full Plan</h4>
								<p class="card-text">
									
									<br/><br/><br/><br/><br/><br/><br/><br/>
								
								</p>
							  </div>
							</div>
						</div> */}
						<div class="row">
							<div class="card-header" style={icontextcenter}>
								<p>Departure Date:  25 October 2021</p>
							</div>
						</div>
						<br/>
						<div class="row col-md-12" >
							<div class="col-md-2">
								<button class="btn btn-danger">DELETE EVENT</button>
							</div>
							<div class="col-md-2 offset-md-1">
								<button class="btn btn-info" >EDIT EVENT</button>
							</div>
						</div>
					</div>
					<br/>
			
	</div>
        </div>
    )
}

export default agencySingleTour
