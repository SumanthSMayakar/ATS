import React,{useState, useEffect, useCallback, useContext} from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../GlobalContext";

const url = 'http://localhost:4900'



export default function Rejected(props){
  const {searchTitle}=props

  const context = useContext(GlobalContext)
  const token = context.token



  const [isLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  const [isUser] = context.useAuth.isUser ? context.useAuth.isUser : false;
  const [isAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;
    const [users, setUsers] = useState([])
    console.log('title',searchTitle)
    const readUsers =async () => {
        await fetch(`${url}/api/v1/applicants/auth/allApplicant`)
        .then(res => res.json())
        .then(out => {
            setUsers(out)
        }).catch(err => toast.error(err.message))
    }

    const initFetch = useCallback(() =>{
        readUsers()
      
    },[readUsers])

    useEffect(()=>{
        initFetch()
    },[ ])
        //delet user

        const delUser=async(id)=>{
            if(window.confirm(`Do you want to delet user id=${id}?`)){
                await fetch(`${url}/api/v1/applicants/auth/deleteApplicant/${id}`,{
                    method:"DELETE",
                    headers:{
                        'Content-type':'application/json'
    
                    }
                }).then(res=>res.json())
                .then(out=>{
                    toast.success('User deleted successfully');
                    //window.location.reload()
                }).catch(err=>toast.error(err.message))
            }
        }
    return (
      
      <div className="container">

      <div className="row">
        <div className="col-md-12 ">
                  
        <div className='table-responsive shadow-lg'>
          <table className="table table-bordered ">
            <thead className='bg-light'>
              <tr className='text-center'>
                 <th scope="col">Name</th>
                 <th scope="col">Job title</th>
                 <th scope="col">Phone</th>
                 <th scope="col">E-mail</th>
                 <th scope="col">Stage</th>
                 <th scope="col">Rating</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
          
              
     {users.map((item,index) => ( 
                   
        item.jobTitle === searchTitle && item.stage === 'Rejected' ?( <tbody>
               
                      <tr key={index}>
                        <td className='text-center'>{item.name}</td>
                        <td className='text-center'>{item.jobTitle}</td>
                        <td className='text-center'>{item.mobile}</td>
                        
                        <td className='text-center'>{item.email}</td>
                      
                        <td className='text-center'>{item.stage}</td>
                        <td className='text-center'>{item.rating}</td>
       
    
                        
    
                        <td className='d-flex justify-content-between' >
                         
    
                          {
                            isLogged && isAdmin ? (
                                <NavLink to={`/api/v1/applicants/auth/currentApplicant/${item._id}`} style={{ color:"rgb(13,202,240)",'margin-top':'3px',border:"none",background:"white"}} className="bi bi-pencil-square"></NavLink>
                                ) : null
                          }
    
                          {
                            isLogged && isAdmin ? (
                                <td><button className="bi bi-trash3-fill rounded-circle "  style={{ color:" rgb(255, 0, 0)",border:"none",background:"white"}} onClick={()=>delUser(item._id)}></button></td>
                                ) : null
                          }
                        </td>
                      </tr>
                  
                      </tbody> ):('')    ))}
              
              
        
          </table>
          </div>
        </div>
      </div>
    </div>
    )
}





 
