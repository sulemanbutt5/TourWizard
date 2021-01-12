import React from 'react'
import {Link} from 'react-router-dom'
import AgencyProfileLinkComponent from './AgencyProfileLinkComponent'
function AgencyNewEvent() {

    return (
    <div>	
        <br/> 
        <br/>
        <div class="container">
            <div class='row'>
                <AgencyProfileLinkComponent/>                        
                <form>																
                    <div class="row col-md-12">						
                        <h3>Add New Event</h3>
                        <br/><br/>						
                    </div>						
                    <div class="row col-md-12">	
                        <div class="jumbotron col-md-10" align="center">
                            <img src="images/upload_image.png" class="img-fluid" alt=""/>												
                                <div class="form-group">
                                    <div class="upload-btn-wrapper">
                                        <button class="ui secondary basic button">Upload an image</button>
                                        <input type="file" name="myfile" accept="image/*" />
                                    </div>
                                </div>																
                        </div>							
                    </div>											
                    <div class="row col-md-12">
                        <h4 class="card-title"><img src="images/umbrella.png" style={{width:"20px",height:"20px",paddingBottom:"1px",backgroundColor:"yellow"}} alt=""/>{" "} Description</h4>
                    </div>
                    <br/>																
                    <div class="row col-md-11" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <p class="col-md-2" style={{fontWeight:'bold'}}>Title</p>										
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="title" />
                        </div>
                        <p class="col-md-2" style={{fontWeight:'bold'}}>Destination</p>										
                        <div class="col-md-4">
                            <input type="text" class="form-control" name="destination"/>
                        </div>
                    </div>	
                    <br/>								
                    <div class="row col-md-11" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <p class="col-md-2" style={{fontWeight:'bold'}}>Departure Date</p>										
                        <div class="col-md-4">
                            <input type="date" class="form-control" name="date" />
                        </div>
                        <p class="col-md-2" style={{fontWeight:'bold'}}>Package Price</p>										
                        <div class="col-md-4">
                            <input type="number" class="form-control" name="price"/>
                        </div>
                    </div>		
                    <br/>
                    <div class="row col-md-11">
                        <p class="col-md-2" style={{fontWeight:'bold'}}>Duration (Days)</p>										
                        <div class="col-md-4">
                            <input type="number" class="form-control" name="days" />
                        </div>									
                    </div>	
                    <br/>
                    <div class="row col-md-11">			
                        <p class="card-title" style={{backgroundColor:"#2B3856",color:"white",padding:"5px",fontWeight:'bold'}} >Package Inclusions</p>
                    </div>
                    <br/>
    
                    <div class="row col-md-8" id="header">	
                        <ul class="list-group list-group-flush col-md-12" id="ul"></ul>	
                    </div>
                    
                    <div class="row col-md-8">
                        <div class="col-md-8">
                            <textarea id="comment" rows="2" cols="60" placeholder=" Add Service that u provide in this Event" class="col-md-10"></textarea>
                        </div>
                        <div col-md-2>									
                            <button type="button" class="ui violet button tiny" onclick="new_element()">Add</button>
                        </div>
                    </div>							
                    <br/>
    
                    <div class="row col-md-11">			
                        <h5 class="card-title" style={{backgroundColor:"#2B3856",color:"white",padding:"5px"}} >Full Plan</h5>
                    </div>
                    <br/>	
    
                    <div class="row col-md-11">								
                            <textarea id="comment" rows="10" cols="60"></textarea>													
                    </div>							
                    <br/>
    
                    <Link to='/agencyProfile'><button type="submit" class="ui green button medium">Create</button></Link>												
                </form>	
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    )
}

export default AgencyNewEvent
