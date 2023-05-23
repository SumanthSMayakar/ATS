import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { toast } from 'react-toastify';
import { GlobalContext } from '../../GlobalContext';


const apiUrl = "http://localhost:4900";

const ApplyingJob = () => {
  
  // const [uirender,setUirender]=useState(false)

  const [input, setInput] = useState({
    name: "",
    jobTitle:"",
    email:"",
    mobile: "",
    address:"",
    salary:'',
    location:'option1',
    noticePeriod:'',
    resume:null,
    desc:'',
   
    
  });


 



  //
  const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const token = context.token

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]:value })
    }

    useEffect(()=>{

    }, [])


    const addApplicant = async (e) => {
        e.preventDefault();
        try {
            const newInput = {...input}

            const res = await axios.post(`${apiUrl}/api/v1/applicants/auth/createApplicant`, newInput, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': token
                }
            })
                     console.log('Applicant =',res)
            toast.success(res.data.msg)
            navigate(`/user/managejobs`)
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }


 
  return (
    <section className='mt-5 mb-5'>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-9">
          <h5 className="text-success text-center mb-2">Apply for Job</h5>
            <form className='shadow-lg mb-5 rounded ' autoComplete='off'onSubmit={addApplicant} >
                    <div className="card bg-light pt-4 px-4">
                        <div className="card-body">

                            <div className="row ">

                                <div className="col-md-6">
                                        <h6 className="mb-0"> Name <span className="text-danger">*</span></h6>
                                </div>
                            
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        value={input.name}
                                        onChange={handleInputChange}
                                        />                           
                                 </div>

                            </div>
                            
                            <hr className="mx-n3"/>
                            <div className="row  py-3">
                                <div className="col-md-6">
                
                                <h6 className="mb-0">Role<span className="text-danger">*</span></h6>
                                
                
                                </div>
                                <div className="col-md-6 ">
                                    <select className="form-select form-select-sm py-3" aria-label=".form-select-sm " value={input.jobTitle} name='jobTitle' id='jobTitle' onChange={handleInputChange} required>
                                    <option for="">Select your role</option>
                                        <option value="front end dev">Front end dev</option>
                                        <option value="Back end dev">Back end dev</option>
                                        <option value="QA">QA</option>
                                    </select>
                                
                                </div>
                            </div>
                        

                            <hr className="mx-n3"/>

                
                            <div className="row ">
                                <div className="col-md-6 ">
                                    <h6 className="mb-0">E-mail <span className="text-danger">*</span></h6>
                                
                                    </div>
                                    <div className="col-md-6">
                                    <input
                                        type="email"
                                        placeholder="email"
                                        name="email"
                                        value={input.email}
                                        onChange={handleInputChange}
                                    />                            
                                    </div>
                            </div>
                
                        
                
                        
                
                            <hr className="mx-n3"/>

                            <div className="row  py-3">
                                <div className="col-md-6">
                                <h6 className="mb-0">Mobile<span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-md-6">   
                                <input
                                    type="text"
                                    placeholder="mobile"
                                    name="mobile"
                                    value={input.mobile}
                                    onChange={handleInputChange}
                                    />                                
                                </div>
                                <div class="col-10"></div>
                            </div>
                            {/* <hr className="mx-n3"/>
                            <div className="row  py-3">
                                <div className="col-md-6">
                
                                <h6 className="mb-0">Employment Type <span className="text-danger">*</span></h6>           
                                </div>
                                <div className="col-md-6 ">
                                    <select className="form-select form-select-sm py-3" aria-label=".form-select-sm " name='emptype' value={job.emptype} id='emptype' onChange={handleInputChange}  required>
                                    <option for="">Select Employee type</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="On-demand">On-demand</option>
                                    </select>
                                </div>
                            </div> */}
                        
                        
                        
                            <hr className="mx-n3"/>
                            
                        
                            <div className="row  py-3">
                                <div className="col-md-6">
                                <h6 className="mb-0">Address<span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-md-6">   
                                <input
                                    type="area"
                                    placeholder="address"
                                    name="address"
                                    value={input.address}
                                    onChange={handleInputChange}
                                    />                                
                                </div>
                                <div class="col-10"></div>
                            </div>

                            <hr className="mx-n3"/>
                
                            <div className="row ">
                                <div className="col-md-6">
                                <h6 className="mb-0">Are you ready to Relocation</h6>
                                </div>
                               
                                <div className="col-md-6"> 
                                <input
                                    type="radio"
                                    value='Yes'
                                    name="Yes"
                                    onChange={handleInputChange}
                                />
                                    <small className="ms-1">Yes</small>
                                  
                                   
                                    <input
                                    type="radio"
                                    value="No"
                                    name="No"
                                  
                                    onChange={handleInputChange}
                                />
                                    <small className="ms-1">No</small>
                 
                                </div>
                                <div class="col-10"></div>
                            </div>


                            <hr className="mx-n3"/>    

                                <div className="row ">
                                    <div className="col-md-6">
                                    <h6 className="mb-0">Salary expection</h6>
                                    </div>
                                    <div className="col-md-6">
                                    <input type="text" className="form-control form-control-md" placeholder='eg. 250000' name='salary' id='salary' value={input.salary}  onChange={handleInputChange} required />
                                    </div>
                                </div>
                                
                                <hr className="mx-n3"/>  

                                <div className="row ">
                                    <div className="col-md-6">
                                    <h6 className="mb-0">What is your notice period</h6>
                                    </div>
                                    <div className="col-md-6 ">
                                    <select className="form-select form-select-sm py-3" aria-label=".form-select-sm " value={input.noticePeriod} name='noticePeriod' id='noticePeriod' onChange={handleInputChange} required>
                                       <option for="">Select your notice period</option>
                                        <option value="5 days">5 days</option>
                                        <option value="15 days">15 days</option>
                                        <option value="1 month">1 month</option>
                                    </select>
                                
                                </div>
                                </div>
                        
                            <hr className="mx-n3"/>
                            
                                       
                            <div className="row ">
                                <div className="col-md-6">
                                <h6 className="mb-0">Are you working Professional or Fresher<span className="text-danger">*</span></h6>
                                </div>
                               
                                <div className="col-md-6"> 
                                    <input type="radio" />  
                                    <small className="ms-1">I am working Professional </small>
                                  
                                   
                                    <input type="radio" className="ms-5" />
                                    <small className="ms-1">I am Fresher</small>
                 
                                </div>
                                <div class="col-10"></div>
                            </div>



        {/* 
                         <hr className="mx-n3"/>
                                <div className="col-md-6">
                                    <h6 className="mb-0">Upload your resume <span className="text-danger">*</span></h6>
                                        </div>
                                    
                                            <div className="col-md-6"> 
                                            <input type="file"  id="file" onChange={e => setInput(e.target.files[0])} />
                                            </div>                        
                                        </div>
                                    <div class="col-10"></div> 
                                 </div> */}
                      
                      
                                   

                        <hr className="mx-n3"/>
                            
                                    <div className="row  py-3">
                                        <div className="col-md-6">

                                        <h6 className="mb-0">Describe yourself<span className="text-danger">*</span></h6>
                                        <small>Why should we Hire you</small>

                                        </div>
                                        
                                        <div className="col-md-6">

                                        <textarea  maxlength="250" className="form-control"  cols="30" rows="4"  placeholder="Message sent to the employer" name="desc" id='desc' value={input.desc} onChange={handleInputChange} required></textarea>
                                        

                                        </div>
                                 </div>


                                    <hr className="mx-n3"/>
                                
                                <div className="px-5 text-center py-4">
                                    <button type="submit" className="btn btn-outline-primary btn-lg">Submit</button>
                                </div>
                            </div>
                    </div>
            </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ApplyingJob;
