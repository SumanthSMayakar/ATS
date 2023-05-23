import React from 'react'
import "../style/bannerstyle.css"

function Home() {
  return (
    <div className="container">
        <div className="row bngimg  pt-5 pb-5"> 
            <div className="col col-md-7 text-light ps-4 pe-5">
                <h1 className='mt-4 mb-4 lh-5' id='typed' style={{ fontWeight : 'bold'}}>Applicant Tracking System</h1>
                <p className='text-justify ' style={{ textAlign : "justify", fontSize : "18px", lineHeight : "2", fontStyle : 'italic', color : 'black'}}>We provide a cloud-based comprehensive ATS - Applicant Tracking System  
                        solution to make your recruitment process easier. Through effective pipelines, AI-driven insights, 
                        and applicant matching,
                        candidate management becomes a seamless task.
                </p>
                <button type="button" class="btn btn-outline-primary">Learn more</button>
            </div>
        </div>
     </div>

    
    

  )
}

export default Home
