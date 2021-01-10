import React from 'react'
import { Link } from 'react-router-dom'
import AgencyNewEvent from './AgencyNewEvent'

function AllAgencyTours() {
    
    const viewbuttonstyle={border:"1px solid #483C32",color:"white",backgroundColor:"#483C32"}
    return (
        <div>	
            <br/><br/>				
            <div class="container">
                <h1 align="center" style={{paddingBottom: "3%"}} class="offset-lg-1">Your Events</h1>
                <div class="row">																									
                    <div class="col-lg-5 offset-lg-1">
                        <div class="card" style={{marginBottom: "20px"}}>
                            <img class="card-img-top" src="..\images\sample.png" width="30px" height="200px" alt=""/>
                            <div class="card-body">
                                <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                                <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                                Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>							
                                <button onclick={AgencyNewEvent} class="rounded" style={viewbuttonstyle} >View Package</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="card" >
                            <img class="card-img-top" src="..\images\sample.png" width="30px" height="200px" alt=""/>
                            <div class="card-body">
                            <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                            <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                            Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                            <button onclick="window.location.href = 'agency_new_event.html';" class="rounded" style={viewbuttonstyle} >View Package</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">																									
                    <div class="col-lg-5 offset-lg-1">
                        <div class="card" style={{marginBottom: "20px"}}>
                            <img class="card-img-top" src="..\images\sample.png" width="30px" height="200px" alt=""/>
                            <div class="card-body">
                                <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                                <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                                Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                                <Link to='/agencyNewEvent'><button class="rounded" style={viewbuttonstyle} >View Package</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="card" >
                            <img class="card-img-top" src="..\images\sample.png" width="30px" height="200px" alt=""/>
                            <div class="card-body">
                            <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                            <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                            Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                            <button onclick="window.location.href = 'agency_new_event.html';" class="rounded" style={viewbuttonstyle} >View Package</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                    <li class="page-item"><a class="page-link" href={window.location.href}>Previous</a></li>
                    <li class="page-item"><a class="page-link" href={window.location.href}>1</a></li>
                    <li class="page-item"><a class="page-link" href={window.location.href}>2</a></li>
                    <li class="page-item"><a class="page-link" href={window.location.href}>3</a></li>
                    <li class="page-item"><a class="page-link" href={window.location.href}>Next</a></li>
                    </ul>
                </nav>
            </div>																			
            <br/><br/>		
        </div>
    )
}

export default AllAgencyTours
