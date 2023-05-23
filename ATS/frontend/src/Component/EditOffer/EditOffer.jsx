import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GlobalContext } from '../../GlobalContext';
import axios from 'axios';

function EditJobs() {
    const [offer, setoffer] = useState({
        jobid : '',
        applicantname : '',
        title : '',
        email : '',
        date : '',
        number : ''
    })

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const token = context.token

    // to read single product info
    const params = useParams()

    const getSingleProduct = async() => {
      const res = await axios.get(`/api/v1/offer/single/${params.id}`)
          setoffer(res.data.offers)
          console.log(res.data.offers);
    }


    const readValue = (e) => {
        const { name, value } = e.target
        setoffer({ ...offer, [name]:value })
    }

    useEffect(()=>{
        getSingleProduct()
    }, [])


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const newoffer = {...offer }

            const res = await axios.patch(`/api/v1/offer/updateoffer/${params.id}`, newoffer, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })

            toast.success(res.data.msg)
            navigate(`/admin/manageoffer`)
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }

    



  return (
    <section className='mt-5 mb-5'>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-9">
          <h5 className="text-success mb-2">Offer Details</h5>
            <form className='shadow-lg mb-5 rounded ' autoComplete='off'onSubmit={submitHandler} >
                    <div className="card bg-light pt-4 px-4">
                        <div className="card-body">
            {/* job id  */}
                        <div className="row ">
                            <div className="col-md-6">
                                <h6 className="mb-0">Job Id<span className="text-danger">*</span></h6>
                            </div>
                            <div className="col-md-6 pe-5">
                                <input type="text" className="form-control form-control-md" name='jobid' id='jobid' value={offer.jobid}  onChange={readValue} required/>
                            </div>
                        </div>
                            
                        <hr className="mx-n3"/>
                        {/* job title  */}
            
                        <div className="row ">
                            <div className="col-md-6 ">
                                <h6 className="mb-0">Job title <span className="text-danger">*</span></h6>
                                <small>A job title must describe one position</small>
                                </div>
                                <div className="col-md-6 pe-5">
                                <input type="text" className="form-control form-control-md" placeholder="e.g. Software Developer" name='title' id='title' value={offer.title}  onChange={readValue} required />
                            </div>
                        </div>
            
                        <hr className="mx-n3"/>
                        {/* applicantname  */}

                            <div className="row ">
                                <div className="col-md-6">
                                    <h6 className="mb-0">Applicant Name<span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-md-6 pe-5">
                                    <input type="text" className="form-control form-control-md" name='applicantname' id='applicantname' value={offer.applicantname} onChange={readValue} required/>
                                </div>
                            </div>

                        <hr className="mx-n3"/>
                        
            {/* mail id  */}
                        <div className="row ">
                            <div className="col-md-6 ">
                                <h6 className="mb-0">Mail ID<span className="text-danger">*</span></h6>
                                <small>Enter Your Mail Id</small>
                                </div>
                                <div className="col-md-6 pe-5">
                                <input type="email" className="form-control form-control-md" placeholder="e.g. name123@gmail.com" name='email' id='email' value={offer.email}  onChange={readValue} required />
                            </div>
                        </div>
            
                      
            
                        <hr className="mx-n3"/>
                        {/* date  */}
                        <div className="row ">
                            <div className="col-md-6 ">
                                <h6 className="mb-0">Join Date<span className="text-danger">*</span></h6>
                                <small>Enter the Date</small>
                                </div>
                                <div className="col-md-6 pe-5">
                                <input type="date" className="form-control form-control-md" placeholder="e.g. name123@gmail.com" name='date' id='date' value={offer.date}  onChange={readValue} required />
                            </div>
                        </div>
                        <hr className="mx-n3"/>
                        {/* cts  */}
                        <div className="row ">
                            <div className="col-md-6 ">
                                <h6 className="mb-0">CTC<span className="text-danger">*</span></h6>
                                {/* <small>Enter the CTC</small> */}
                                </div>
                                <div className="col-md-6 pe-5">
                                <input type="number" className="form-control form-control-md" placeholder="" name='number' id='number' value={offer.number}  onChange={readValue} required />
                            </div>
                        </div>
                
                            <div className="px-5 text-center py-4">
                                <button type="submit" className="btn btn-outline-success btn-lg">Update </button>
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

export default EditJobs

