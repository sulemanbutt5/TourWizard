import React from 'react'

function AgencyProfile() {
    return (
        
	<div>	
		
		
	{/* <!------------------------------------Body---------------------------------------------------------------> */}
        <br/><br/>				
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="sidenav">
                        <a href="#about"><strong>My Profile</strong></a>
                        <a href="#services">Edit Profile</a>
                        <a href="#clients">Password & Security</a>  
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="my-card">
                        <div class="container">						
                            <h1>Paradise Tours</h1>
                            <h4>
                                <img src="images/location.png" style={{width:"18px",height:"18px",paddingBottom:"1px"}} alt=""/>
                                179/A Ablock New Muslim Town Lahore
                            </h4>
                            <p>
                                Deluxe Holidays is a dedicated and experienced agency that works with top service providers worldwide. We provide our clients with premium travel services including; the latest model vehicles for transfers, expert & well-mannered tour guides throughout the trips, selection of hotels based on high reviews along with quality locations, room sizes, meals and amenities. We have contracted with premium fine dining Indian Sub-Continent & International Restaurants worldwide. We have special discounts with worldwide outlet malls, attractions, theme parks, cruise companies and train organizations in order to provide the finest trips to our customers.
                            </p>								    	
                        </div>
                    </div>
                </div>							
            </div>
            <div class="row">
                <div class="col-md-3">								
                </div>
                <div class="col-md-9">
                    <div class="my-card">
                        <div class="container">						
                            <h1>Arranged Tours</h1>
                            <div class="row">
                                <div class="card" style={{width:"50%"}}>
                                    <img class="card-img-top" src="sample.png" width="30px" height="200px" alt=""/>
                                    <div class="card-body">
                                        <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                                        <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                                        Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                                        <button href="#" class="rounded" style={{border:"1px solid #9F000F",color:"#9F000F",backgroundColor:"white",width:"100%"}} >9 Days</button>
                                    </div>
                                </div>						
                                <div class="card" style={{left:"1%",width:"50%"}}>
                                    <img class="card-img-top" src="sample.png" width="30px" height="200px" alt=""/>
                                    <div class="card-body">
                                    <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                                    <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                                    Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                                    <button href="#" class="rounded" style={{border:"1px solid #9F000F",color:"#9F000F",backgroundColor:"white",width:"100%"}} >9 Days</button>
                                    </div>
                                </div>
                            </div>
                        <br/><br/>
                            <div class="col text-center">
                                <button href="#" class="btn btn-default" style={{fontWeight:"bold",border:"1px solid green",color:"green",backgroundColor:"white",width:"250px"}} >Show More</button>
                            </div><br/>													    
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">								
                </div>
                <div class="col-md-9">
                    <div class="my-card">
                        <div class="container">						
                            <h1>Linked Accounts</h1>
                            <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="col">											      	
                                                <button class="ui facebook  big button">
                                                    <i class="fab fa-facebook"></i>
                                                        Facebook
                                                </button>
                                            </th>
                                            <th scope="col">
                                                <button class="ui twitter  big button">
                                                    <i class="twitter icon"></i>
                                                            Twitter
                                                </button>
                                            </th>
                                            <th scope="col">
                                                <button class="ui instagram big button">
                                                    <i class="instagram icon"></i>
                                                        Instagram
                                                </button>
                                            </th>											      
                                        </tr>
                                    </tbody>											  
                            </table>
                        </div>
                    </div>
                </div>							
            </div>
        </div>							
        <br/><br/><br/><br/>
	
	</div>
    )
}

export default AgencyProfile
