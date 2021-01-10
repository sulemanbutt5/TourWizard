import React from 'react'
import {Link} from 'react-router-dom'

function Settings() {
    return (
        
<div>
    <br/>
    <Link class="nav-link" to="/settings">
    <h2 class="text-center" style={{color:"black",fontWeight:"bold"}}><img src="images/settings.jpg" class="rounded-circle float right" width="30" height="30" alt="" />{" "}SETTINGS</h2>
    </Link>
    <br/><br/>
    
    
    
    <div class="row" >
    
        <div class="col-md-4"  style={{marginLeft:"150px"}}>

            <span><h3 class="text-center" style={{color:"black",fontWeight:"bold"}}>Password & Security</h3></span><br/>
            
            <form action="#">
            
                <div class="form-group">
                    <label >Old Password</label>
                    <input type="password" class="form-control"  placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label >New Password</label>
                    <input type="password" class="form-control"  placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control"  placeholder="Password"/>
                </div>
                <div class="text-center" >
                    <Link to='/userProfile'><button type="submit" class="btn btn-primary" style={{backgroundColor:"black",width:"200px"}}>Update</button></Link>
                </div>
            </form><br/><br/>
        </div>
        <div class="col-md-4" style={{marginLeft:"150px"}}>
    
            <h3 class="text-center" style={{color:"black",fontWeight:"bold"}}>Personal Info</h3><br/>
            <form action="#">
                <div class="form-group ">
                <label >First Name</label>
                <input type="text" class="form-control"  placeholder="Enter First Name"/>
                </div>
                    <div class="form-group">
                <label >Last Name</label>
                <input type="text" class="form-control" placeholder="Enter Last Name"/>
                </div>
                <div class="text-center" >
                    <Link to='/userProfile'><button type="submit" class="btn btn-primary" style={{backgroundColor:"black",width:"200px"}}>Update</button></Link>
                </div>
            </form>
        </div>
    </div>
    <br/><br/><br/><br/>

</div>
    )
}

export default Settings
