import React,{useEffect} from 'react'

function About() {
	useEffect(()=>{
        document.title="Tour Wizard | About"
    },[])
	const colsm8style={fontWeight:"bold",paddingTop:"75px"}
	const cardbodystyle={backgroundColor:"#E5E4E2"}
	const cardtitlestyle={textAlign:"center",color:"#E42217"}
	const h2style={fontWeight:"bold",color:"#F87217"}
	const spanstyle={fontWeight:"bold",color:"#E42217"}
    return (

        <div>
		
	{/* <!------------------------------------Body---------------------------------------------------------------> */}
	
		<img src="images/wall.jpg" alt="" style={{width:"100%",height:"450px"}}/>
	
		<div >
				<br/><br/>
						<div class="col text-center">
							<h2 style={h2style} >Our <span style={spanstyle} >Services</span></h2>
						</div>
				<br/><br/>
				<div class="container">
					<div class="row">																									
							<div class="col-lg-4 ">
								<div class="card" style={{marginBottom: "20px"}}>
		  							<img class="card-img-top" src="images/building.png" width="30px" height="200px" alt=""/>
		  							<div class="card-body" style={cardbodystyle}>
							<h5 class="card-title" style={cardtitlestyle}>Nationwide Hotel Reservation</h5>
							<p class="card-text">Book a hotel online from over 1,200 hotels across 60 cities 
							in Pakistan at the best price guaranteed.</p>
						  </div>
								</div>
							</div>
							<div class="col-lg-4 ">
								<div class="card" >
								  <img class="card-img-top" src="images/nation.png" width="30px" height="200px" alt=""/>
								  <div class="card-body" style={cardbodystyle}>
							<h5 class="card-title" style={cardtitlestyle}>Nationwide Tours</h5>
							<p class="card-text">Get to travel across Pakistan at the best rates through 
							our public and fully customized tour packages.</p>
						  </div>
								</div>
							</div>
							<div class="col-lg-4 ">
								<div class="card" >
								  <img class="card-img-top" src="images/plane.png" width="30px" height="200px" alt=""/>
						  <div class="card-body" style={cardbodystyle}>
							<h5 class="card-title" style={cardtitlestyle}>International Hotels/ Flights Comparison</h5>
							<p class="card-text">Wether booking yourself or through an agent, make the most of our 
							comparison tool to get the best quotation for airfares and international hotels.</p>
						  </div>
								</div>
							</div>
					</div>
				</div>
					
					<br/><br/><br/><br/>
				</div>
		{/* <!----------------------------------------------------------------------------------------------------> */}

			<div >
				<br/><br/>
						<div class="col text-center">
							<h2 style={h2style}>Why? <span style={spanstyle}>Tour Wizard</span></h2>
						</div>
				<br/><br/>
					<div class="container">
					  <div class="row">
						<div class="col-sm-3">
							<div class="card" >
								  <img class="card-img-top" src="images/why.png" alt=""/>
							</div>
						</div>
						<div class="col-sm-8" style={colsm8style}>
						  <p>One stop marketplace, catering to all the traveling needs, from hotel reservation
						  <br/>to fully managed tours in Pakistan and flights/international hotels comparison</p>
						</div>
					  </div>
					</div>
				<br/><br/>	
			</div>		
				<br/><br/>
					<div class="container">
					  <div class="row">
						<div class="col-sm-8" style={colsm8style}>
						  <p>Get your tours fully customized to suit your needs and preferences whether
						  <br/>travleing with employees, family or peers.</p>
						</div>
						<div class="col-sm-3">
							<div class="card" >
								  <img class="card-img-top" src="images/why1.png" alt=""/>
							</div>
						</div>
					  </div>
					</div>
					<br/><br/><br/><br/>
		</div>
    )
}

export default About
