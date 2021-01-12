import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
function AgencyProfileLinkComponent() {
    useEffect(()=>{
        document.title="Tour Wizard | Agency Profile"
    },[])
    return (
        <div className="col-md-3">
        <div className="sidenav">
            <Link to='/agencyProfile'><p><strong>My Profile</strong></p></Link>
            <Link to='/agencyNewEvent'><p>Create Custom Tour</p></Link>
            <Link to='/allCustomTours'><p>Your Custom Tours</p></Link>
            <Link to='/agencyProfilePassword'><p>Password & Security</p></Link>
        </div>
    </div>
    )
}

export default AgencyProfileLinkComponent
