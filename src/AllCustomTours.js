import React from 'react'

function AllCustomTours() {
    return (
        <div>	
		<br/><br/>				
		<div class="container">
			<div class="row">							
				<div class="col-md-12">								
						<div class="container">						
							<h1 align="center">Your Custom Tours</h1>
							<div class="list-group">										  
								<a href={window.location.href} class="list-group-item list-group-item-action flex-column align-items-start">
								<div class="d-flex w-100 justify-content-between">
									<h3 class="mb-1">Trip to NARAN</h3>
									<small class="text-muted">1 day ago</small>
								</div>
								<p class="mb-1">A <span>5</span> days tour to the <span>Naran</span></p>
								<small class="text-muted">Budget : <span> 15000</span> -  <span> 25000</span></small>
								</a>
								<a href={window.location.href} class="list-group-item list-group-item-action flex-column align-items-start">
								<div class="d-flex w-100 justify-content-between">
									<h3 class="mb-1">Trip to Hunza Valley</h3>
									<small class="text-muted">3 days ago</small>
								</div>
								<p class="mb-1">A <span>5</span> days tour to the <span>Hunza Valley</span></p>
								<small class="text-muted">Budget : <span> 15000</span> -  <span> 25000</span></small>
								</a>
							</div>	    															    
						</div>
					</div>												
			</div>						
		</div>							
		<br/><br/><br/><br/><br/>		
</div>
    )
}

export default AllCustomTours
