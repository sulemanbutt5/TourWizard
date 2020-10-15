import React from 'react'

function SingleCustomTour() {
    const imgstyle={width:"18px",height:"18px",paddingBottom:"1px"}
    return (
        <div>
	<br/><br/>

	<div class="container">
		
		<div class="row">
			<div class="card" style={{left:"0px",width:"45rem",borderColor:"white"}}>
				<div style={{fontWeight:"bold",fontSize:"24px",textAlign:"center",backgroundColor:"#2B3856",color:"white"}}>
				Custom Tour to <span>NARAN</span></div>
			</div>
		</div>					
		
		<div class="row">
			<div class="card" style={{left:"0px",width:"26rem",borderColor:"white"}}>
				<div class="card-body">								
				<p class="card-text" style={{fontSize:"16px"}}><span style={{fontWeight:"bold"}}>Destination:</span> 
				{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
				{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
				{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
				{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}<em>Naran</em> <br/>
				<span style={{fontWeight:"bold"}}>Duration:</span> 
				{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
				{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
				{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
				{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}<em>5 Days</em></p>
				
				</div>
			</div>
		</div>
		
		<div class="row">
			
			<div class="card" style={{left:"0px",width:"46rem",borderColor:"white"}}>
				<div class="card-body" style={{paddingLeft:"0px"}}>
				<h4 class="card-title" style={{backgroundColor:"#2B3856",color:"white",padding:"5px"}} >Package Inclusions</h4>
				<p class="card-text" style={{color:"black",fontSize:"16px"}} >
				
					<img src="images/success.png" style={imgstyle} alt=""/>{" "}{" "} All inclusive package <br/>
					<img src="images/success.png" style={imgstyle} alt=""/>{" "}{" "} Air tickets emirates airline visa <br/>
					<img src="images/success.png" style={imgstyle} alt=""/>{" "}{" "} Luxury transport <br/>
					<img src="images/success.png" style={imgstyle} alt=""/>{" "}{" "} All tours <br/>
					<img src="images/success.png" style={imgstyle} alt=""/>{" "}{" "} All meals at fine dining restaurants <br/>
					<img src="images/success.png" style={imgstyle} alt=""/>{" "}{" "} 4 star luxury hotel in downtown <br/>
				
				</p>
				</div>
			</div>
		</div>						
		<div class="row">
			<div class="card" style={{left:"0px",borderColor:"white"}}>
				<div style={{fontWeight:"bold",fontSize:"18px"}}>Departure Date : 25 October 2019</div>
			</div>
		</div>
		<br/>
		<div class="row">
			<p><button class="btn btn-danger">DELETE EVENT</button></p>
		</div>
		
		
	</div>
	
	<br/><br/><br/><br/>

</div>
    )
}

export default SingleCustomTour
