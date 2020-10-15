import React from 'react'

function UserCustomTour() {
    return (
<div>								
	<br/><br/>
	<div class="container">
		<form>																
			<div class="row col-md-12">						
				<h2>Create a custom event request</h2>
				<br/><br/>						
			</div>	
			<br/>																						
			<div class="row col-md-11">								
				<h5 class="col-md-2">Destination</h5>										
				<div class="col-md-4">
					<input type="text" class="form-control" name="destination"/>
				</div>
				<strong class="col-md-2">Departure Date</strong>
				<div class="col-md-3">
					<input type="date" class="form-control" name="date" />
				</div>
			</div>	
			<br/>								
			<div class="row col-md-11">								
				<h5 class="col-md-2">Minimum Price</h5>										
				<div class="col-md-4">
					<input type="text" class="form-control" name="price"/>
				</div>
				<strong class="col-md-2">Maximum Price</strong>
				<div class="col-md-4">
					<input type="text" class="form-control" name="price"/>
				</div>

			</div>		
			<br/>
			<div class="row col-md-11">
				<h5 class="col-md-2">Duration(Days)</h5>										
				<div class="col-md-4">
					<input type="text" class="form-control" name="days" />
				</div>									
			</div>							
			<br/>
			<div class="row col-md-11">			
				<h5 class="card-title " style={{backgroundColor:"#2B3856",color:"white",padding:"5px"}}>Package Inclusions</h5>
			</div>
			<br/>

			<div class="row col-md-8" id="header">	
				<ul class="list-group list-group-flush col-md-12" id="ul"></ul>	
			</div>
			
			<div class="row col-md-8">
				<div class="col-md-8">
					<textarea id="comment" rows="2" cols="60" placeholder=" Add Service that u want in this Event" class="col-md-10"></textarea>
				</div>
				<div col-md-2>									
					<button type="button" class="ui violet button tiny" onclick="new_element()">Add</button>
				</div>
			</div>							
			<br/>
			<button type="submit" class="ui green button medium">Create</button>
													
		</form>	
	</div>
	<br/><br/><br/><br/>
</div>
    )
}

export default UserCustomTour
