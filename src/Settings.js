import React from 'react'
import {Link} from 'react-router-dom'
import UserProfileLinkComponent from './UserProfileLinkComponent'

function Settings() {
    return (
        <div class="container">   
        <br/><br/>
            <div class="row">
                <UserProfileLinkComponent/>
                <br/>
                {/* <Link class="nav-link" to="/settings">
                <h2 class="text-center" style={{color:"black",fontWeight:"bold"}}><img src="images/settings.jpg" class="rounded-circle float right" width="30" height="30" alt="" />{" "}SETTINGS</h2>
                </Link> */}
                <br/><br/>
                <div class="col-md-4">
                    <span><h3 class="text-center" style={{color:"black",fontWeight:"bold"}}>Password & Security</h3></span><br/>
                    <form action="#">
                        <div class="form-group">
                            <h5>Old Password</h5>
                            <input type="password" class="form-control"  placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <h5>New Password</h5>
                            <input type="password" class="form-control"  placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <h5>Confirm Password</h5>
                            <input type="password" class="form-control"  placeholder="Password"/>
                        </div>
                        <div class="text-center" >
                            <Link to='/userProfile'><button type="submit" class="btn btn-primary" style={{backgroundColor:"black",width:"200px"}}>Update</button></Link>
                        </div>
                    </form><br/><br/>
                </div>
                <div class="col-md-4">

                    <h3 class="text-center" style={{color:"black",fontWeight:"bold"}}>Personal Info</h3><br/>
                    <form action="#">
                        <div class="form-group ">
                            <h5>First Name</h5>
                            <input type="text" class="form-control"  placeholder="Enter First Name"/>
                        </div>
                        <div class="form-group">
                            <h5>Last Name</h5>
                            <input type="text" class="form-control" placeholder="Enter Last Name"/>
                        </div>
                        <div class="text-center" >
                            <Link to='/userProfile'><button type="submit" class="btn btn-primary" style={{backgroundColor:"black",width:"200px"}}>Update</button></Link>
                        </div>
                    </form>
                </div>
                <br/><br/><br/><br/>

            </div>
        </div>
    )
}

export default Settings
