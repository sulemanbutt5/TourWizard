import React from 'react'

function Carousel() {
    return (
        <div>
            
	
	<div class="bd-example">
	  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" >
		<ol class="carousel-indicators">
		  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
		  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
		  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner">
		  <div class="carousel-item active" >
			<img src="images/img1.jpg" class="d-block w-100" height="575px" alt=""/>
			<div class="carousel-caption d-none d-md-block" >
			  <h5>Love where you're going</h5>
			  <p>Book experiences you will want to tell the world about</p>
			</div>
		  </div>
		  <div class="carousel-item" >
			<img src="images/img2.jpg" class="d-block w-100" height="575px" alt=""/>
			<div class="carousel-caption d-none d-md-block" >
			  <h5>Love where you're going</h5>
			  <p>Book experiences you will want to tell the world about</p>
			</div>
		  </div>
		  <div class="carousel-item" >
			<img src="images/img3.jpg"  class="d-block w-100" height="575px" alt=""/>
			<div class="carousel-caption d-none d-md-block" >
			  <h5>Love where you're going</h5>
			  <p>Book experiences you will want to tell the world about</p>
			</div>
		  </div>
		</div>
		<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
		  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		  <span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
		  <span class="carousel-control-next-icon" aria-hidden="true"></span>
		  <span class="sr-only">Next</span>
		</a>
	  </div>
	</div>

        </div>
    )
}

export default Carousel
