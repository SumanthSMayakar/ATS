import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GlobalContext } from '../../GlobalContext';
import axios from 'axios';

function CreateJobs() {
    const [job, setjob] = useState({
        jobid : '',
        companyname : '',
        title : '',
        desc : '',
        resp : '',
        skill : '',
        emptype : '',
        mode : '',
        shift : document.getElementById('scedule'),
        salary : '',
        location : '',
        openings : '',
    })

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const token = context.token

    const readValue = (e) => {
        const { name, value } = e.target
        setjob({ ...job, [name]:value })
    }

    useEffect(()=>{

    }, [])


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const newjob = {...job }

            const res = await axios.post(`/api/v1/jobs/create`, newjob, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })

            toast.success(res.data.msg)
            navigate(`/admin/managejobs`)
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }

    



  return (
    <section className='mt-5 mb-5'>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <h5 className="text-success mb-2">Create Job</h5>
                <form className='shadow-lg mb-5 rounded ' autoComplete='off'onSubmit={submitHandler} >
                        <div className="card bg-light pt-4 px-4">
                            <div className="card-body">

                            <div className="row ">
                                <div className="col-md-6">
                                    <h6 className="mb-0">Job Id<span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control form-control-md" name='jobid' id='jobid' value={job.jobid}  onChange={readValue} required/>
                                </div>
                            </div>
                                
                            <hr className="mx-n3"/>

                                <div className="row ">
                                    <div className="col-md-6">
                                        <h6 className="mb-0">Company Name <span className="text-danger">*</span></h6>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control form-control-md" name='companyname' id='companyname' value={job.companyname} onChange={readValue} required/>
                                    </div>
                                </div>

                            <hr className="mx-n3"/>

                
                            <div className="row ">
                                <div className="col-md-6 ">
                                    <h6 className="mb-0">Job title <span className="text-danger">*</span></h6>
                                    <small>A job title must describe one position</small>
                                    </div>
                                    <div className="col-md-6">
                                    <input type="text" className="form-control form-control-md" placeholder="e.g. Software Developer" name='title' id='title' value={job.title}  onChange={readValue} required />
                                </div>
                            </div>
                
                            <hr className="mx-n3"/>
                
                            <div className="row  py-3">
                                <div className="col-md-6">
                
                                <h6 className="mb-0">Job description <span className="text-danger">*</span></h6>
                                <small>Provide short description about the job,keep it short and to the point</small>
                
                                </div>
                                <div className="col-md-6">
                
                                <textarea  maxlength="250" className="form-control"  cols="30" rows="4"  placeholder="Message sent to the employer" name="desc" id='desc' value={job.desc} onChange={readValue} required></textarea>
                                
                
                                </div>
                            </div>
                
                            <hr className="mx-n3"/>
                            <div className="row  py-3">
                                <div className="col-md-6">
                
                                <h6 className="mb-0">Jobs Responsibilities <span className="text-danger">*</span></h6>
                                <small>Provide short Responsibilities about the job,keep it short and to the point</small>
                
                                </div>
                                <div className="col-md-6">
                
                                <textarea  maxlength="250" className="form-control"  cols="30" rows="4"  placeholder="Message sent to the employer" value={job.resp} name='resp' id='resp' onChange={readValue} required></textarea>
                                
                
                                </div>
                            </div>
                
                            <hr className="mx-n3"/>

                            <div className="row  py-3">
                                <div className="col-md-6">
                                <h6 className="mb-0">Skill required<span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-md-6">   
                                    <input type='text' placeholder="select requred skills" name="skill" id="skill" className='form-control form-control-md' onChange={readValue} value={job.skill} aria-label=".form-select-sm " required/> 
                                    
                                </div>
                                <div class="col-10"></div>
                            </div>
                            <hr className="mx-n3"/>
                            <div className="row  py-3">
                                <div className="col-md-6">
                
                                <h6 className="mb-0">Employment Type <span className="text-danger">*</span></h6>           
                                </div>
                                <div className="col-md-6 ">
                                    <select className="form-select form-select-sm py-3" aria-label=".form-select-sm " name='emptype' value={job.emptype} id='emptype' onChange={readValue}  required>
                                    <option for="">Select Employee type</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="On-demand">On-demand</option>
                                    </select>
                                </div>
                            </div>
                            <hr className="mx-n3"/>
                            <div className="row  py-3">
                                <div className="col-md-6">
                
                                <h6 className="mb-0">Work mode <span className="text-danger">*</span></h6>
                                
                
                                </div>
                                <div className="col-md-6 ">
                                    <select className="form-select form-select-sm py-3" aria-label=".form-select-sm " value={job.mode} name='mode' id='mode' onChange={readValue} required>
                                    <option for="">Select work mode</option>
                                        <option value="Work from Office">Work from Office </option>
                                        <option value="Work from Home">Work from Home</option>
                                        <option value="Hybrid">Hybrid</option>
                                    </select>
                                
                                </div>
                            </div>
                            <hr className="mx-n3"/>

                            <div className="row  py-3">
                                <div className="col-md-6">
                
                                <h6 className="mb-0">Working Schedule <span className="text-danger">*</span></h6>
                                <small>You can pick multiple work schedule</small>
                                
                
                                </div>
                                <div className="col-md-6 ">
                                    <label for="" className=" text-dark my-2"> Work Schedule <span className="text-danger">*</span></label>
                                    <div className='form' >
                                        <input type="radio" name="shift" id="scedule"  value='Day Shift' onChange={readValue} required/>
                                        <label for="" className="mx-2">Day Shift</label> <br/>
                                        <input type="radio" name="shift" id="scedule"  value='Night Shift' onChange={readValue} required/>
                                        <label for="" className="mx-2">Night Shift</label> <br/>
                                    </div>
                                
                                </div>
                            </div>

                            <hr className="mx-n3"/>                    
                                <div className="row ">
                                    <div className="col-md-6">
                                    <h6 className="mb-0">Total Openings</h6>
                                    </div>
                                    <div className="col-md-6">
                                    <input type="number" className="form-control form-control-md" placeholder='eg. 0' name='openings' id='openings' value={job.openings}  onChange={readValue} required />
                                    </div>
                                </div>


                            <hr className="mx-n3"/>                    
                                <div className="row ">
                                    <div className="col-md-6">
                                    <h6 className="mb-0">Salary</h6>
                                    </div>
                                    <div className="col-md-6">
                                    <input type="text" className="form-control form-control-md" placeholder='eg. 250000' name='salary' id='salary' value={job.salary}  onChange={readValue} required />
                                    </div>
                                </div>
                            <hr className="mx-n3"/>
                
                            <div className="row ">
                                <div className="col-md-6">
                                <h6 className="mb-0">Location</h6>
                                </div>
                                <div className="col-md-6">
                                <input type="text" className="form-control form-control-md" name='location' id='location' value={job.location}  onChange={readValue}  required />
                                </div>
                            </div>
                
                            <hr className="mx-n3"/>
                
                            <div className="px-5 text-center py-4">
                                <button type="submit" className="btn btn-outline-primary btn-lg">Post Job</button>
                            </div>
                
                            </div>
                        </div>
                </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CreateJobs
