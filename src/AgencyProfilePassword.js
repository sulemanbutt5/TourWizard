import React from 'react'

function AgencyProfilePassword() {
    return (
        <div>			
	<br/><br/>				
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<div class="sidenav">
					<a href="#about">My Profile</a>
					<a href="#services">Edit Profile</a>
					<a href="#clients"><strong>Password & Security</strong></a>  
				</div>
			</div>
			<div class="col-md-9">
				<div class="my-card">
					<div class="container">						
						<h2>Password Settings</h2>
						<form>
					<div class="form-group">
						<label for="formGroupExampleInput">Old Password</label>
						<input type="password" class="form-control" id="formGroupExampleInput" placeholder="Old Password here"/>
					</div>									
					<div class="form-group">
						<label for="formGroupExampleInput2">New Password</label>
						<input type="password" class="form-control" id="formGroupExampleInput2" placeholder="New Password here"/>
					</div>
					<div class="form-group">
						<label for="formGroupExampleInput2">Phone Number</label>
						<input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Confirm New Passoword here"/>
					</div>									
					<div class="form-group row">
						<div class="col-md-12">
							<button type="submit" class="ui green button ">Save Changes</button>
						</div>
					</div>
				</form>				
					</div>
				</div>
			</div>							
		</div>						
	</div>							
	<br/><br/><br/><br/>
</div>
    )
}

export default AgencyProfilePassword
