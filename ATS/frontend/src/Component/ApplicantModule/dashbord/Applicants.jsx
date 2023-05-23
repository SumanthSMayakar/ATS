import React, { useEffect, useState } from "react";
import './Applicants.css'
import New from "../pipeline/New";
import Resume from "../pipeline/Resume";
import Screaning from "../pipeline/Screaning";
import Hired from "../pipeline/Hired";
import Rejected from "../pipeline/Rejected";
import Offer from "../pipeline/Offer";
import Interview from "../pipeline/Interview";
import { toast } from 'react-toastify';
import axios from "axios";

const apiUrl = "http://localhost:4900";

export default function Applicants(){
   const [singleJob,setSingelejob]=useState([])
   const [jobdetails,setJobdetails]=useState([])
    const [activeButton, setActiveButton] = useState("New");
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTitle,setSearchTitle] =useState('')
    const [openings,setOpenings] =useState('')

    const [searchValue, setSearchValue] = useState([]);
    const [jobs, setJobs] = useState([
      { title: 'Front end developer', count: 23 },
      { title: 'Back end developer', count: 28 },
      { title: 'Data analyst', count: 28 },
      { title: 'Ui&Ux Designer', count: 12298 },
      { title: 'Tester', count: 53 },
      { title: 'Digital marketing', count: 21 },
    ]);
    let par='6442643d0d8e847e0f20099a';
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      setSearchValue(event.target.value);
    };

     const appliacntsDetails =async()=>{
        if( searchTitle === jobdetails.title ){
                
                {activeButton === "New" && <New />}
                    {/*   {activeButton === "Resume" && <Resume />}
                     {activeButton === "Screaning" && <Screaning />}
                     {activeButton === "Interview" && <Interview />}
                     {activeButton === "Offer" && <Offer />}*/}
                     {activeButton === "Hired" && <Hired />} 
                     {activeButton === "Rejected" && <Rejected />}
                }
                else{
                             <h1> Applicants Not Found </h1>
                     }
    }
        
    

    const getJobdetails = async()=>{
        const res = await axios.get(`/api/v1/jobs/all`)
        console.log(res.data.jobs);
        setJobdetails(res.data.jobs)
    }

//     const filteredJobs = jobs.filter((job) =>
//       job.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    const filteredJobs = jobdetails.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
    const handleClick = (button) => {
      setActiveButton(button);
    };
   //get single job
   const readSingleJob = async()=>{
        const res = await axios.get(`/api/v1/jobs/single`)
        console.log('singlejob',res.data);
        setSingelejob(res.data.jobs)
      }

  useEffect(()=>{getJobdetails()},[])





return(
                        <div className="container">
                         
                        <div className="row">
                        <div className="col-md-12 ">
                        <h5 className="text-success mb-2 mt-3">Applicants List</h5>
                        
                        
                                        <h2>{searchTitle}</h2>
                                        <datalist id="data">
                                        
                                                <option >Front end developer</option>
                                                <option >Back end developer</option>
                                                <option >Data analyst</option>
                                                <option >Ui&Ux Designer </option>
                                                <option >Tester</option>
                                                <option >Digital marketing</option>

                                        </datalist>
                
            </div>
            <div className="row col-lg-8 col-md-6 col-sm-12" id="job-desc">
              
       
          <ul className="d-flex justify-content-evenly list-unstyled" >
              
                        <li><h6>Total applicants : <span className="text-success">123</span> </h6></li>
                        <li><h6>Required applicants : <span className="text-success">{openings}</span> </h6></li>
                        <li><h6>Hireing By: <span className="text-success">Alex</span> </h6></li>
                        <li><h6>Last update: <span className="text-success">458</span> </h6></li>


               </ul>
     

            </div>
            <div className="row col-lg-8 ms-5 d-flex justify-content-center align-items-center col-md-4 col-sm-2 " id='streamline'>
               
                        
                        <div class="row  p-2 d-flex justify-content-center align-items-center">
                                <div className="col ms-1 text-center bg-success" onClick={()=>{handleClick("New")}}>
                                New 
                                </div>
                                <div className="col ms-1 text-center bg-success" onClick={()=>{handleClick("Resume")}}>
                                Resume
                                </div>
                                <div className="col ms-1 text-center bg-success" onClick={()=>{handleClick("Screaning")}}>
                                Screaning
                                </div>
                                <div className="col ms-1 text-center bg-success" onClick={()=>{handleClick("Interview")}}>
                                Interview
                                </div>
                                <div className="col ms-1 text-center bg-success" onClick={()=>{handleClick("Offer")}}>
                                Offer
                                </div>
                                <div className="col ms-1 text-center bg-success" onClick={()=>{handleClick("Rejected")}}>
                                Rejected
                                </div>
                                <div className="col ms-1 text-center bg-success" onClick={()=>{handleClick("Hired")}}>
                                Hired
                                </div>
                   
                          </div>
{/*    

                        <center className="ms-1 mt-4 fs-5">
                       
                                <div class="btn-group dropstart">
                                        <button type="button" class="btn " data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu" id="opt">
                                                <li>Add</li>
                                                <li>Delete</li>
                                                <li>Update</li>

                                
                                        </ul>
                       
                                </div>

                        </center> */}

                      
            </div>
           
                <div style={{'width':'78%'}} className="row  col-lg-8 col-md-6 d-flex col-sm-12 float-start" id="list">
                    <div style={{ 'height': '395px', 'overflow-y': 'scroll'}} className="shadow  bg-body-tertiary rounded ">
               
                    {activeButton === "New" && <New searchTitle={searchTitle} />}
                      {activeButton === "Resume" && <Resume searchTitle={searchTitle} />}
                     {activeButton === "Screaning" && <Screaning searchTitle={searchTitle}/>}
                     {activeButton === "Interview" && <Interview searchTitle={searchTitle} />}
                     {activeButton === "Offer" && <Offer searchTitle={searchTitle} />}
                     {activeButton === "Hired" && <Hired searchTitle={searchTitle}/>} 
                     {activeButton === "Rejected" && <Rejected searchTitle={searchTitle} />}
                 
                    </div>

                    {/* <div id='catg' className="shadow p-3  mb-5 bg-body-tertiary rounded">
                     
                                     <div >
                                        <input list="data" id="search-applicant"  onChange={(e)=>{setVal(e.target.value)}} placeholder="Search on jobs" />
                                        <i className="bi bi-search"></i>
                                        </div>
                                        <p className="text-center">follwed by job categorys</p>
                                     
                      
                </div> */}
                 
                      <div id='catg' style={{'width':'19%'}} className='  position-absolute  end-0 float-end d-flex shadow  pt-3  mb-5 bg-body-tertiary rounded'>
                                <ul style={{'height': '363px', 'overflow-y': 'scroll','width':'100%', 'margin-left':'-10px'} } >
                                        <div className="">
                                        {/* <i className='bi bi-search position-absolute bottom-50 end-50'></i> */}
                                        <input
                                        list='data'
                                        id='search-applicant'
                                        onChange={handleSearch}
                                        placeholder='Search on jobs...'
                                        value={searchTerm}
                                        className="rounded-pill ps-2 p-1 border border-dark"
                                        />
                                        </div>

                                        <p>followed by job categories</p>
                                        {filteredJobs.map((job, index) => (
                                                        <li
                                                        key={index}
                                                        className='d-flex justify-content-between align-items-center shadow p-3 mb-1 bg-body-tertiary rounded'
                                                        onClick={() => {
                                                                setSearchTitle(job.title);
                                                                setOpenings(job.openings);

                                                                console.log(searchValue)
                                                        }}
                                                        >
                                                        {job.title} <span className="position-relative fw-bold">{job.openings}</span>
                                                        </li>
                                        ))}
                                </ul>
                      </div>
              
              <div>
    
      </div>
    </div>
  </div>
</div>
)
            }
