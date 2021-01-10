import React from 'react'

function Single() {
    const imgstyle={width:"18px",height:"18px",paddinBottom:"1px"}
    return (

        <div>

        <br/><br/>

        <div class="container">
            
            <div class="row">
                <div class="card" style={{left:"0px",width:"45rem",borderColor:"white"}}>
                    <div style={{fontWeight:"bold",fontSize:"24px",textAlign:"center",backgroundColor:"#2B3856",color:"white"}}>
                    Paradise Tours</div>
                </div>
            </div>
            <div class="row">
                <div class="card" style={{left:"0px",width:"45rem"}}>
                    <img class="card-img-top" src="../images/sample.png" height="300px" alt=""/>
                </div>
                
                <div class="card" style={{left:"75px",width:"20rem",borderColor:"black",height:"120px"}}>
                    <div class="card-body">
                    <h4 class="card-title" style={{backgroundColor:"green",color:"white",textAlign:"center",height:"35px"}} >Package Price</h4>
                    <p class="card-text" style={{color:"red",textAlign:"center",fontWeight:"bold" }}>12000 PKR</p>
                    </div>
                </div>
                
            </div>
            
            <div class="row">
                <div class="card" style={{left:"0px",width:"26rem",borderColor:"white"}}>
                    <div class="card-body">
                    <h4 class="card-title"><img src="images/umbrella.png" style={{width:"20px",height:"20px",paddingBottom:"1px",backgroundColor:"yellow"}} alt=""/>{" "} Description</h4>
                    <p class="card-text" style={{fontSize:"16px"}}><span style={{fontWeight:"bold"}}>Destination:</span> 
                    {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
                    {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
                    {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
                    {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}<em>Beirut</em> <br/>
                    <span style={{fontWeight:"bold"}}>Duration:</span> 
                    {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
                    {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
                    {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
                    {" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}<em>5 Days</em></p>
                    </div>
                </div>
                
                <div class="card" style={{left:"375px",width:"20rem",borderColor:"black",height:"120px"}}>
                    <div class="card-body">
                    <h4 class="card-title" style={{backgroundColor:"green",color:"white",textAlign:"center",height:"35px"}} >For Booking</h4>
                    <p class="card-text" style={{color:"red",textAlign:"center",fontWeight:"bold"}} >+92 323 438 3332</p>
                    </div>
                </div>
                
            </div>
            
            <div class="row">
                
                <div class="card" style={{left:"0px",width:"46rem",borderColor:"white"}}>
                    <div class="card-body" style={{paddingLeft:"0px"}}>
                    <h4 class="card-title" style={{backgroundColor:"#2B3856",color:"white",padding:"5px"}} >Package Inclusions</h4>
                    <p class="card-text" style={{color:"black",fontSize:"16px"}} >
                    
                        <img src="../images/success.png" style={imgstyle} alt=""/>{" "}{" "} All inclusive package <br/>
                        <img src="../images/success.png" style={imgstyle} alt=""/>{" "}{" "} Air tickets emirates airline visa <br/>
                        <img src="../images/success.png" style={imgstyle} alt=""/>{" "}{" "} Luxury transport <br/>
                        <img src="../images/success.png" style={imgstyle} alt=""/>{" "}{" "} All tours <br/>
                        <img src="../images/success.png" style={imgstyle} alt=""/>{" "}{" "} All meals at fine dining restaurants <br/>
                        <img src="../images/success.png" style={imgstyle} alt=""/>{" "}{" "} 4 star luxury hotel in downtown <br/>
                    
                    </p>
                    </div>
                </div>
            </div>
            <div class="row">
                
                <div class="card" style={{left:"0px",width:"46rem",borderColor:"white"}}>
                    <div class="card-body" style={{paddingLeft:"0px"}}>
                    <h4 class="card-title" style={{backgroundColor:"#2B3856",color:"white",padding:"5px"}} >Full Plan</h4>
                    <p class="card-text" style={{color:"black",fontSize:"16px",border:"1px solid black"}} >
                        
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                    
                    </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card" style={{left:"0px",borderColor:"white"}}>
                    <div style={{fontWeight:"bold",fontSize:"18px"}}>Departure Date : 30 October 2021</div>
                </div>
            </div>
            
            
        </div>
        
        <br/><br/><br/><br/>
			
	</div>
    )
}

export default Single
