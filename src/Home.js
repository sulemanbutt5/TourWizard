import React,{useEffect} from 'react'

import Corousel from './Carousel'

function Home() {
	useEffect(()=>{
        document.title="Tour Wizard | Home"
    },[])
    return (
        <div>
      
{/* <!------------------------------------------Carousel-----------------------------------------------------> */}
            <Corousel/>
	
{/* <!-- ------------------------------------Body---------------------------------------------------------- --> */}
			<br/><br/><br/><br/><br/><hr/><br/>
				<div class="container">
					<div class="row">																									
						<div class="col-lg-4 ">
							<div class="card" >
								  <img class="card-img-top" src="images/sample.png" width="30px" height="200px" alt=""/>
								  <div class="card-body">
									<h4 class="card-title">Best of northern Pakistan in Summers</h4>
									<p class="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
									Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>							
						<button href={window.location.href} class="rounded" >9 Days</button>
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
						<button href={window.location.href} class="rounded" >9 Days</button>
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
						<button href={window.location.href} class="rounded" >9 Days</button>
							  </div>
							</div>
						</div>
					</div>
				</div>
					
				
			<br/><br/>
					<div class="col text-center">
						<button href={window.location.href} class="btn btn-default" >Show More</button>
					</div>

			
			<br/>
{/* <!------------------------------------Container------------------------------------------------------------>			 */}
			
			<br/><br/>
			
			<div >
			<br/><br/>
					<div class="col text-center">
						<h2 >Top Destinations</h2>
					</div>
			<br/><br/>
			<div class="container">
				<div class="row">																									
						<div class="col-lg-4 ">
							<div class="card">
								  <img class="card-img-top" src="images/shangrila.jpg" width="30px" height="200px" alt=""/>
								  <div class="card-body">
									<h4 class="card-title">Shangrila, Lower Kachura Lake</h4>
									<p class="card-text">Family, Friends, Relax</p>							
						<button href={window.location.href} class="rounded">9 Days</button>
								  </div>
							</div>
						</div>
						<div class="col-lg-4 ">
							<div class="card" >
							  <img class="card-img-top" src="images/naran.jpg" width="30px" height="200px" alt=""/>
							  <div class="card-body">
								<h4 class="card-title">Naran, Kaghan and Shogran</h4>
								<p class="card-text"><br/>Family, Friends, Relax</p>
						<button href={window.location.href} class="rounded">5 Days</button>
							  </div>
							</div>
						</div>
						<div class="col-lg-4 ">
							<div class="card" >
							  <img class="card-img-top" src="images/swat.jpg" width="30px" height="200px" alt=""/>
							  <div class="card-body">
								<h4 class="card-title">Kalam, Swat</h4>
								<p class="card-text"><br/>Family, Friends, Relax</p>
						<button href={window.location.href} class="rounded" >6 Days</button>
							  </div>
							</div>
						</div>
				</div>
			</div>
				
				<br/><br/><br/><br/>
			</div>
			
        </div>
    )
}

export default Home