import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'

function UserProfileLinkComponent() {
    useEffect(()=>{
        document.title="Tour Wizard | User Profile"
    },[])
    return (
        <div className="col-md-3">
            <div className="sidenav">
                <Link to='/userProfile'><p><strong>My Profile</strong></p></Link>
                <Link to='/settings'><p>Edit Profile Info</p></Link>
                <Link to='/userCustomTour'><p>Requet for a Tour</p></Link>
            </div>
        </div>
    )
}

export default UserProfileLinkComponent
