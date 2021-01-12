import React from 'react'
import {Link} from 'react-router-dom'
import AMMM from './AMMM'




function groupTours()
{
    const booknowstyle={border:"1px solid #9F000F",color:"white",backgroundImage:"linear-gradient(to right, #F88017, #9F000F)",width:"100px",height:"30px"}
    const viewpstyle={border:"1px solid #483C32",color:"white",backgroundColor:"#483C32",width:"150px",height:"30px"}

    return(
        
	<div>
    <br/><br/>            
    <div class="container">
        <div class='row'>            
   
            <div class="col-md-4" style={{marginBottom:30}}>
                <div class="card">
                      <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
                      <div class="card-body">
                        <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                        <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                        Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>	
                        <div style={{display:'flex',flexDirection:'row'}}>						
                        <Link to="/agencysingletour"><button class = "rounded" style={booknowstyle}>Book Now</button></Link>
                        <Link to="/single"><button class="rounded" style={viewpstyle}>View Package</button></Link>
                        </div>
                      </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card" >
                  <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
                  <div class="card-body">
                    <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                    <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                    Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                    <div style={{display:'flex',flexDirection:'row'}}>						
                    <Link to="/agencysingletour"><button class = "rounded" style={booknowstyle}>Book Now</button></Link>
                    <Link to="/single"><button class="rounded" style={viewpstyle}>View Package</button></Link>
                    </div>
                  </div>
                </div>
            </div>
            
            
        <br/><br/>
            <AMMM/>																							
            <div class="col-md-4">
                <div class="card" >
                      <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
                      <div class="card-body">
                        <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                        <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                        Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                        <div style={{display:'flex',flexDirection:'row'}}>						
                        <Link to="/agencysingletour"><button class = "rounded" style={booknowstyle}>Book Now</button></Link>
                        <Link to="/single"><button class="rounded" style={viewpstyle}>View Package</button></Link>		  							</div>
                        </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card" >
                  <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
                  <div class="card-body">
                    <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                    <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                    Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                    <div style={{display:'flex',flexDirection:'row'}}>						
                    <Link to="/agencysingletour"><button class = "rounded" style={booknowstyle}>Book Now</button></Link>
                    <Link to="/single"><button class="rounded" style={viewpstyle}>View Package</button></Link>								  </div>
                    </div>
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
    <br/><br/><br/><br/>

</div>
    )
}

export default groupTours