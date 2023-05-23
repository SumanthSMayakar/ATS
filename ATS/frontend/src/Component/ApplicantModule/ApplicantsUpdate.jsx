import React, {useState,  useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

const url = 'http://localhost:4900'

function ApplicantsUpdate(props){
    const navigate=useNavigate();

    const params = useParams();
    const [read,setRead]=useState([])
    const [user, setUser] = useState({
     
        jobTitle:"",
        stage:'',
        rating:"",
        feeddesc:''
        

    })

    const readSingleUser = async () => {
        await fetch(`${url}/api/v1/applicants/auth/singleUser/${params.id}`)
        .then(res => res.json())
        .then(out =>{
            setRead(out)
            console.log("single user" ,read)
        }).catch(err => toast.error(err.message))

    }

    useEffect(()=>{
        readSingleUser()
    },[]);
    //to set the updated value back to state
    const readValue = (e)=>{
        const {name,value} =e.target;
            setUser({...user,[name]:value})

    }


    const submitHandler=async (e)=>{
        e.preventDefault();
        try {
            console.log(`user=`,user)
            fetch(`${url}/api/v1/applicants/auth/currentApplicant/${params.id}`,{
                method:'PUT',
                body:JSON.stringify(user),
                headers:{
                    'content-type':'application/json'
                }
            }).then(res=>res.json())
            .then(out=>{toast.success("successfully updated")
        navigate(`/admin/applicants`)})

        } catch (error) {
            toast.error(error.message)

        }
    }
    return (
        <section className='mt-5 mb-5' id="head">
        <div className="container h-100">
          <div className="row d-flex  justify-content-center align-items-center h-100">
            <div className="col-xl-9">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Update : {read.name}</h3>
                </div>
            </div>

                    <div className="row  d-flex  justify-content-center align-items-center ">
                        <div className="col-md-6 offest-md-3">
                            <div className="card ">
                                <div className="card-body">

                                    
                        <form onSubmit={submitHandler} className="p-1" autoComplete='off'>
                    
                <input
                type="text"
                placeholder="jobtitle"
                name='jobTitle'
                value={user.jobTitle}
                onChange={readValue}
                className="m-1 w-100" 
                />
            
                <select className="form-select m-1 form-select-sm py-3"
                aria-label=".form-select-sm " 
                value={user.stage}
                    name='stage' 
                    id='stage'
                    
                    onChange={readValue} required>
                                            <option for="">Choose Stage</option>
                                                <option value="New">New</option>
                                                <option value="Interview">Interview</option>
                                                <option value="Resume">Resume</option>
                                                <option value="Screaning">Screaning</option>
                                                <option value="Offer">Offer</option>
                                                <option value="Hired">Hired</option>


                </select>

                
                <select className="form-select m-1 form-select-sm py-3"
                aria-label=".form-select-sm " 
                value={user.rating}
                    name='rating' 
                    id='rating'
                    
                    onChange={readValue} required>
                                            <option for="">Choose ratings</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>


                </select>
            
               

            <textarea  maxlength="250"
            className="form-control m-1"  
            cols="30" rows="4"  
            placeholder="Writing  here Applicant remarks" 
            name="feeddesc" id='feeddesc' 
            value={user.feeddesc} 
            onChange={readValue} 
            required>
            </textarea>

                    <div className="form-group mt-2">
                        <input type="submit" value="update" className=" btn btn-primary" />
                    </div>

                 </form>
                 </div>
                    </div>
                </div>
            </div>
            </div>
                </div>
            </div>
</section>
    )
}
export default ApplicantsUpdate;