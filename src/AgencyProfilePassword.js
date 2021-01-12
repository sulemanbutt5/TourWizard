import React from 'react'
import AgencyProfileLinkComponent from './AgencyProfileLinkComponent'
function AgencyProfilePassword() {
    return (
        <div>			
	<br/><br/>				
	<div class="container">
		<div class="row">
			<AgencyProfileLinkComponent/>
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
