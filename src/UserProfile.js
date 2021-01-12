import React from 'react'
import UserProfileLinkComponent from './UserProfileLinkComponent'

function UserProfile() {

    return (
        
	<div>	
        <br/><br/>				
        <div className="container">
            <div className="row">
                <UserProfileLinkComponent/>
                <div className="col-md-9">
                    <div className="my-card">
                        <div className="container">						
                            <h1>M. Suleman Butt</h1>
                            <h4>
                                <img src="../images/location.png" style={{width:"18px",height:"18px",paddingBottom:"1px"}} alt=""/>
                                123 A block, Allama Iqbal Town, Lahore
                            </h4>								    	
                        </div>
                    </div>
                </div>							
            </div>
            <div className="row">
                <div className="col-md-3">								
                </div>
                <div className="col-md-9">
                    <div className="my-card">
                        <div className="container">						
                            <h1>My Custom Tours</h1>
                            <div className="row">
                                <div className="card" style={{width:"50%"}}>
                                    <div className="card-body">
                                        <h4 className="card-title">Northern Pakistan in Summers</h4>
                                        <p className="card-text">Price Limit: 5000 to 15000</p>
                                        <p className="card-text">Departure Date: September 30, 2021</p>
                                        <p className="card-text">Services Needed: Hiking</p>
                                        <button href="#" className="rounded" style={{border:"1px solid #9F000F",color:"#9F000F",backgroundColor:"white",width:"100%"}} >5 Days</button>
                                    </div>
                                </div>						
                                <div className="card" style={{left:"1%",width:"50%"}}>
                                    <div className="card-body">
                                        <h4 className="card-title">Southern Pakistan in Summers</h4>
                                        <p className="card-text">Price Limit: 2000 to 5000</p>
                                        <p className="card-text">Departure Date: August 30, 2021</p>
                                        <p className="card-text">Services Needed: Paragliding | Hot Air Balloon</p>
                                        <button href="#" className="rounded" style={{border:"1px solid #9F000F",color:"#9F000F",backgroundColor:"white",width:"100%"}} >3 Days</button>
                                    </div>
                                </div>
                            </div>
                        <br/><br/>
                            <div className="col text-center">
                                <button href="#" className="btn btn-default" style={{fontWeight:"bold",border:"1px solid green",color:"green",backgroundColor:"white",width:"150px"}} >Show More</button>
                            </div><br/>													    
                        </div>
                    </div>
                </div>
            </div>
            
        </div>							
        <br/><br/><br/><br/>
	
	</div>
    )
}

export default UserProfile
