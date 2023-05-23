import React, { useContext, useEffect, useState } from 'react'
import {NavLink, useNavigate, useParams} from "react-router-dom"
import { GlobalContext } from '../../GlobalContext';
import axios from 'axios';
import { toast } from 'react-toastify';


function ManageJobs() {
  const [jobs, setJobs] = useState([])

  // button
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
  };

  const params = useParams();
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const token = context.token



  const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  const [isAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;


  const getJobs = async()=>{
    const res = await axios.get(`/api/v1/jobs/all`)
    console.log(res.data.jobs);
    setJobs(res.data.jobs)
  }

  useEffect(()=>{
    getJobs()
  },[])


  // cancel job
  const cancelHandler = async (id, status)=>{
    if(status == true){
        if(window.confirm(`Are you sure to Deactive This Job..?`)){
            await axios.patch(`/api/v1/jobs/cancel/${id}`,{ isActive : !status}, {
              headers : {
                Authorization : token
              }
            }).then(res=>{
              toast.success(res.data.msg)
              window.location.reload()
            }).catch(err=> toast.error(err.response.data.msg))
        }
    }else{
        if(window.confirm('Hi, Do you wish to Re-activate this job .?')){
          await axios.patch(`/api/v1/jobs/cancel/${id}`,{ isActive : !status}, {
            headers : {
              Authorization : token
            }
          }).then(res=>{
            toast.success(res.data.msg)
            window.location.reload()
          }).catch(err=> toast.error(err.response.data.msg))
        }
    }
    
  }



  // delete funtion 
  const deletejob = async (id)=>{
    if(window.confirm(`Are you sure to delete job?`)) {
        await axios.delete(`/api/v1/jobs/delete/${id}`, {
          headers : {
            'Content-Type' : 'application/json',
            'Authorization ' : token
          }
        })
        .then(res=>{
          toast.success(res.data.msg)
          window.location.reload();
        }).catch(err=> toast.error(err.response.data.msg))
     }
  }

  // check job inactive or not
  const applyJob = (status)=>{
    if(status == true){

    }
    else{
      toast.error(`You can't apply this job is inactive.`)
    }
  }

  return (
<div className="container">

  <div className="row">
    <div className="col-md-12 ">
    <h5 className="text-success mb-2 mt-3">Job List</h5>
    <div className='table-responsive shadow-lg'>
      <table className="table table-bordered ">
        <thead className='bg-light'>
          <tr className='text-center'>
            <th scope="col">Job Id</th>
            <th scope="col">Job Position</th>
            <th scope="col">Job Description</th>
            <th scope="col">Job type</th>
            <th scope="col">Location</th>
            <th scope="col">Total Openings</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            jobs && jobs.map((item,index)=>{
              return (
                  <tr key={index}>
                    <td className='text-center'>{item.jobid}</td>
                    <td className='text-center'>{item.title}</td>
                    <td>
                      <details className='ms-2'>
                        <h6 className='mt-3'>Company Name: <span>{item.companyname}</span></h6>
                        <ul>
                          <li className='mt-2 text-justify'><b>Description :</b> <span className='text-justify'>{item.desc}</span></li>
                          <li className='mt-2'><b>Responsibilities :</b> <span className='text-justify'>{item.resp}</span></li>
                          <li className='mt-2'><b>Required Skills :</b> <span className='text-justify'>{item.skill}</span></li>
                        </ul>
                        
                        <i class="bi bi-person-workspace mt-2"> <b> Work Mode:</b> { item.mode}</i><br />
                        <i class="bi bi-cash-coin mt-3"> <b> Salary:</b> { item.salary}</i>

                      </details>
                    </td>
                    <td className='text-center'>{item.emptype}</td>
                  
                    <td className='text-center'>{item.location}</td>
                    <td className='text-center'>{item.openings}</td>
                    <td className={item.isActive ? " text-light text-center" : " text-light text-center"}>
                      {
                        isLogged && isAdmin ? (
                          <button  onClick={()=> cancelHandler(item._id, item.isActive)} className={ item.isActive ? "btn btn-outline-success" : "btn btn-outline-danger"}>
                          {
                            item.isActive ? (
                              <span title='Cancel'><i className='bi bi-bag-check-fill'></i> Active</span>
                            ) : (
                                  <span title='Revoke'><i className='bi bi-bag-x-fill'></i> In-Active</span>
                                )
                          }</button>
                        ) : null
                      }

                      {
                        isLogged && isUser ? (
                          <div className={ item.isActive ? "bg-success p-1 rounded-3" : "bg-danger p-1 rounded-3"}>
                          {
                            item.isActive ? (
                              <span title='Cancel'><i className='bi bi-bag-check-fill'></i> Active</span>
                            ) : (
                                  <span title='Revoke'><i className='bi bi-bag-x-fill'></i> In-Active</span>
                                )
                          }</div>
                        ) : null
                      }
                        
                    </td>

                    

                    <td className='d-flex justify-content-between' >
                      {
                        isLogged && isUser ? (
                          <NavLink style={{cursor : 'pointer'}} to={`/user/applingjobs`} className="btn btn-outline-success btn-sm">Apply</NavLink>
                        ) : null
                      }

                      {
                        isLogged && isAdmin ? (
                          <NavLink style={{cursor : 'pointer'}} to={`/admin/editjobs/${item._id}`} className="btn btn-outline-success btn-sm"><i class="bi bi-pencil-square"></i></NavLink>
                        ) : null
                      }

                      {
                        isLogged && isAdmin ? (
                          <NavLink style={{cursor : 'pointer'}} onClick={()=> deletejob(item._id)} className="btn btn-outline-danger btn-sm" ><i className="bi bi-trash "></i></NavLink>
                        ) : null
                      }
                    </td>
                  </tr>
              )
            })
          }
          
        </tbody>
        {
          isLogged && isAdmin ? (<NavLink className="btn btn-outline-success mt-3" to={`/admin/createjobs`}>
          Create New Job
          </NavLink>) : null
        }    
      </table>
      </div>
    </div>
  </div>
</div>

      )
}

export default ManageJobs