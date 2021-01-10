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
						<div className="col text-center">
							<h2 style={h2style} >Our <span style={spanstyle} >Services</span></h2>
						</div>
				<br/><br/>
				<div className="container">
					<div className="row">																									
							<div className="col-lg-4 ">
								<div className="card" style={{marginBottom: "20px"}}>
		  							<img className="card-img-top" src="images/building.png" width="30px" height="200px" alt=""/>
		  							<div className="card-body" style={cardbodystyle}>
							<h5 className="card-title" style={cardtitlestyle}>Nationwide Hotel Reservation</h5>
							<p className="card-text">Book a hotel online from over 1,200 hotels across 60 cities 
							in Pakistan at the best price guaranteed.</p>
						  </div>
								</div>
							</div>
							<div className="col-lg-4 ">
								<div className="card" >
								  <img className="card-img-top" src="images/nation.png" width="30px" height="200px" alt=""/>
								  <div className="card-body" style={cardbodystyle}>
							<h5 className="card-title" style={cardtitlestyle}>Nationwide Tours</h5>
							<p className="card-text">Get to travel across Pakistan at the best rates through 
							our public and fully customized tour packages.</p>
						  </div>
								</div>
							</div>
							<div className="col-lg-4 ">
								<div className="card" >
								  <img className="card-img-top" src="images/plane.png" width="30px" height="200px" alt=""/>
						  <div className="card-body" style={cardbodystyle}>
							<h5 className="card-title" style={cardtitlestyle}>International Hotels/ Flights Comparison</h5>
							<p className="card-text">Wether booking yourself or through an agent, make the most of our 
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
						<div className="col text-center">
							<h2 style={h2style}>Why? <span style={spanstyle}>Tour Wizard</span></h2>
						</div>
				<br/><br/>
					<div className="container">
					  <div className="row">
						<div className="col-sm-3">
							<div className="card" >
								  <img className="card-img-top" src="images/why.png" alt=""/>
							</div>
						</div>
						<div className="col-sm-8" style={colsm8style}>
						  <p>One stop marketplace, catering to all the traveling needs, from hotel reservation
						  <br/>to fully managed tours in Pakistan and flights/international hotels comparison</p>
						</div>
					  </div>
					</div>
				<br/><br/>	
			</div>		
				<br/><br/>
					<div className="container">
					  <div className="row">
						<div className="col-sm-8" style={colsm8style}>
						  <p>Get your tours fully customized to suit your needs and preferences whether
						  <br/>travleing with employees, family or peers.</p>
						</div>
						<div className="col-sm-3">
							<div className="card" >
								  <img className="card-img-top" src="images/why1.png" alt=""/>
							</div>
						</div>
					  </div>
					</div>
					<br/><br/><br/><br/>
		</div>
    )
}

export default About
