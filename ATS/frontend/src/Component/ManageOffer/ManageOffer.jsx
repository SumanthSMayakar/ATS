import React, { useContext, useEffect, useState  } from 'react'
import {NavLink, useNavigate, useParams} from "react-router-dom"
import { GlobalContext } from '../../GlobalContext';
import axios from 'axios';
import { toast } from 'react-toastify';


function ManageJobs() {
  const [offer, setoffer] = useState([])

  const params = useParams();
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const token = context.token


  const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  const [isAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;


  const getOffers = async()=>{
    const res = await axios.get(`/api/v1/offer/all`)
    console.log(res.data.offers);
    setoffer(res.data.offers)
  }

  useEffect(()=>{
    getOffers()
  },[])


  // delete funtion 
  const deleteoffer = async (id)=>{
    if(window.confirm(`Are you sure to delete job?`)) {
        await axios.delete(`/api/v1/offer/deleteoffer/${id}`, {
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

  return (
<div className="container">

  <div className="row">
    <div className="col-md-12 ">
    <h5 className="text-success mb-2 mt-3">Job OnBoard</h5>
    <div className='table-responsive'>
      <table className="table table-bordered ">
        <thead className='bg-light'>
          <tr className='text-center'>
            <th scope="col">Job Id</th>
            <th scope="col">Job Title</th>
            <th scope="col">Applicant Name</th>
            <th scope="col">email</th>
            <th scope="col">Join Date</th>
            <th scope="col">CTC</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            offer && offer.map((item,index)=>{
              return (
                  <tr>
                    <td className='text-center'>{item.jobid}</td>
                    <td className='text-center'>{item.title}</td>
                    <td className='text-center'>{item.applicantname}</td>
                    <td className='text-center'>{item.email}</td>  
                    <td className='text-center'>{item.date}</td>
                    <td className='text-center'>{item.number}</td>
                    
                    <td>
                      <button className="btn btn-outline-primary btn-sm mx-auto">Active</button>
                    </td>

                    

                    <td className='d-flex justify-content-between' >
                     

                      {
                        isLogged && isAdmin ? (
                          <NavLink style={{cursor : 'pointer'}} to={`/admin/editoffer/${item._id}`} className="btn btn-outline-success btn-sm"><i class="bi bi-pencil-square"></i></NavLink>
                        ) : null
                      }

                      {
                        isLogged && isAdmin ? (
                          <NavLink style={{cursor : 'pointer'}} onClick={()=> deleteoffer(item._id)} className="btn btn-outline-danger btn-sm" ><i className="bi bi-trash "></i></NavLink>
                        ) : null
                      }
                    </td>
                  </tr>
              )
            })
          }
          
        </tbody>
        {
          isLogged && isAdmin ? (<NavLink className="btn btn-outline-success mt-3" to={`/admin/createoffer`}>
          Create New Offer
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
