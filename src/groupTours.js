import React from 'react'
import {Link} from 'react-router-dom'

function groupTours()
{
    const booknowstyle={border:"1px solid #9F000F",color:"white",backgroundImage:"linear-gradient(to right, #F88017, #9F000F)",width:"100px"}
    const viewpstyle={border:"1px solid #483C32",color:"white",backgroundColor:"#483C32"}

    return(
        
	<div>
    
{/* <!------------------------------------Body---------------------------------------------------------------> */}
    <br/><br/>
            
    <div class="container" style={{marginLeft:"30px"}}>
        <div class="row">
            <div class="col-sm-3" style={{paddingLeft:"0px"}}>
                <div class="card">
                    <article class="card-group-item">
                        <header class="card-header">
                            <h6 class="title">Range input </h6>
                        </header>
                        <div class="filter-content">
                            <div class="card-body">
                            <div class="form-row">
                            <div class="form-group col-md-6">
                              <label>Min</label>
                              <input type="number" class="form-control" id="inputEmail4" placeholder="$0"/>
                            </div>
                            <div class="form-group col-md-6 text-right">
                              <label>Max</label>
                              <input type="number" class="form-control" placeholder="$1,0000"/>
                            </div>
                            </div>
                            </div> {/*<!-- card-body.// -->*/}
                        </div>
                    </article> {/*<!-- card-group-item.// -->*/}
                    <article class="card-group-item">
                        <header class="card-header">
                            <h6 class="title">Selection </h6>
                        </header>
                        <div class="filter-content">
                            <div class="card-body">
                                <div class="custom-control custom-checkbox">
                                    <span class="float-right badge badge-light round">52</span>
                                    <input type="checkbox" class="custom-control-input" id="Check1"/>
                                    <label class="custom-control-label" for="Check1">Northern Areas</label>
                                </div> {/*<!-- form-check.// -->*/}

                                <div class="custom-control custom-checkbox">
                                    <span class="float-right badge badge-light round">132</span>
                                    <input type="checkbox" class="custom-control-input" id="Check2"/>
                                    <label class="custom-control-label" for="Check2">Gilgit Baltistan</label>
                                </div> {/*<!-- form-check.// -->*/}

                                <div class="custom-control custom-checkbox">
                                    <span class="float-right badge badge-light round">17</span>
                                    <input type="checkbox" class="custom-control-input" id="Check3"/>
                                    <label class="custom-control-label" for="Check3">Swat Kalam Kalash</label>
                                </div> {/*<!-- form-check.// -->*/}

                                <div class="custom-control custom-checkbox">
                                    <span class="float-right badge badge-light round">7</span>
                                    <input type="checkbox" class="custom-control-input" id="Check4"/>
                                    <label class="custom-control-label" for="Check4">Other</label>
                                </div> {/*<!-- form-check.// -->*/}
                            </div> {/*<!-- card-body.// -->*/}
                        </div>
                    </article> {/*<!-- card-group-item.// -->*/}
                </div>
            
            </div> {/*<!-- col.// -->*/}
            
            
            <div class="col-lg-4 offset-lg-1">
                <div class="card" style={{marginBottom:"20px"}}>
                      <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
                      <div class="card-body">
                        <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                        <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                        Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>							
                        <Link to="/agencysingletour"><button class = "rounded" style={booknowstyle}>Book Now</button></Link>
                        <Link to="/agencysingletour"><button class="rounded" style={viewpstyle}>View Package</button></Link>
                      </div>
                </div>
            </div>
            <div class="col-lg-4 ">
                <div class="card" >
                  <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
                  <div class="card-body">
                    <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                    <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                    Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                    <Link to="/agencysingletour"><button class = "rounded" style={booknowstyle}>Book Now</button></Link>
                    <Link to="/agencysingletour"><button class="rounded" style={viewpstyle}>View Package</button></Link>
                  </div>
                </div>
            </div>
            
            
        </div>
        <br/><br/>
        <div class="row">																									
            <div class="col-lg-5 offset-lg-1">
                <div class="card" >
                      <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
                      <div class="card-body">
                        <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                        <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                        Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                        <Link to="/agencysingletour"><button class = "rounded" style={booknowstyle}>Book Now</button></Link>
                        <Link to="/agencysingletour"><button class="rounded" style={viewpstyle}>View Package</button></Link>		  							</div>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
                <div class="card" >
                  <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
                  <div class="card-body">
                    <h4 class="card-title">Best of northern Pakistan in Summers</h4>
                    <p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                    Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                    <Link to="/agencysingletour"><button class = "rounded" style={booknowstyle}>Book Now</button></Link>
                    <Link to="/agencysingletour"><button class="rounded" style={viewpstyle}>View Package</button></Link>								  </div>
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