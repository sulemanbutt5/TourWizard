import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
import AgencyProfileLinkComponent from './AgencyProfileLinkComponent'

function AgencyProfile() {

    const icontextcenter={display: 'flex',alignItems: 'center'}
    return (
        
	<div>	
        <br/><br/>				
        <div className="container">
            <div className="row">
                <AgencyProfileLinkComponent/>
                <div className="col-md-9">
                    <div className="my-card">
                        <div className="container">						
                            <h1>Paradise Tours</h1>
                            <h4>
                                <img src="../images/location.png" style={{width:"18px",height:"18px",paddingBottom:"1px"}} alt=""/>
                                179/A Ablock New Muslim Town Lahore
                            </h4>
                            <p>
                                Deluxe Holidays is a dedicated and experienced agency that works with top service providers worldwide. We provide our clients with premium travel services including; the latest model vehicles for transfers, expert & well-mannered tour guides throughout the trips, selection of hotels based on high reviews along with quality locations, room sizes, meals and amenities. We have contracted with premium fine dining Indian Sub-Continent & International Restaurants worldwide. We have special discounts with worldwide outlet malls, attractions, theme parks, cruise companies and train organizations in order to provide the finest trips to our customers.
                            </p>								    	
                        </div>
                    </div>
                </div>							
            </div>
            <div className="row">
                <div className="col-md-3">								
                </div>
                <div className="col-md-9">
                    <div className="my-card">
                        <div className="container">						
                            <h1>Arranged Tours</h1>
                            <div className="row">
                                <div className="card" style={{width:"50%"}}>
                                    <img className="card-img-top" src="../images/sample.png" width="30px" height="200px" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title">Best of northern Pakistan in Summers</h4>
                                        <p className="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                                        Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                                        <button href="#" className="rounded" style={{border:"1px solid #9F000F",color:"#9F000F",backgroundColor:"white",width:"100%"}} >9 Days</button>
                                    </div>
                                </div>						
                                <div className="card" style={{left:"1%",width:"50%"}}>
                                    <img className="card-img-top" src="../images/sample.png" width="30px" height="200px" alt=""/>
                                    <div className="card-body">
                                    <h4 className="card-title">Best of northern Pakistan in Summers</h4>
                                    <p className="card-text">Hunza | Naran | Shogran | Khunjrab China Border | Saiful Mulook | Islamabad All 
                                    Meals Breakfast Lunch Dinner Complete Transportation &amp Tour Guide</p>
                                    <button href="#" className="rounded" style={{border:"1px solid #9F000F",color:"#9F000F",backgroundColor:"white",width:"100%"}} >9 Days</button>
                                    </div>
                                </div>
                            </div>
                        <br/><br/>
                            <div className="col text-center">
                                <button href="#" className="btn btn-default" style={{fontWeight:"bold",border:"1px solid green",color:"green",backgroundColor:"white",width:"250px"}} >Show More</button>
                            </div><br/>													    
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">								
                </div>
                <div className="col-md-9">
                    <div className="my-card">
                        <div className="container">						
                            <h1>Linked Accounts</h1>
                            <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="col">											      	
                                                <button style={icontextcenter} className="ui facebook  big button">
                                                    <FaFacebookF size={25}/>{'  Facebook'}
                                                </button>
                                            </th>
                                            <th scope="col">
                                                <button style={icontextcenter} className="ui twitter  big button">
                                                    <FaTwitter size={25}/>{`  Twitter`}
                                                </button>
                                            </th>
                                            <th scope="col">
                                                <button style={icontextcenter} className="ui instagram big button">
                                                <FaInstagram size={25}/>{'  Instagram'}
                                                </button>
                                            </th>											      
                                        </tr>
                                    </tbody>											  
                            </table>
                        </div>
                    </div>
                </div>							
            </div>
        </div>							
        <br/><br/><br/><br/>
	
	</div>
    )
}

export default AgencyProfile
