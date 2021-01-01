import React,{useEffect} from 'react'
function Error() {

    useEffect(()=>{
        document.title="Tour Wizard | Error 404"
    },[])
    return (
        <div style={{textAlign:"center"}}>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <h1 style={{color:"red"}}>Error 404 - Page not Found...</h1>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Error
