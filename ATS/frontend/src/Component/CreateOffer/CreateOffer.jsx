import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GlobalContext } from '../../GlobalContext';
import axios from 'axios';
import {saveAs} from 'file-saver'

function CreateJobs() {
    const [offer, setoffer] = useState({
        jobid : '',
        applicantname : '',
        title : '',
        email : '',
        date : '',
        number : ''
         })

   const data1 = {...offer}      

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const token = context.token

    const readValue = (e) => {
        const { name, value } = e.target
        setoffer({ ...offer, [name]:value })
    }

    // useEffect(()=>{

    // }, [])


    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post(`/api/v1/offer/createpdf`, data1) //create pdf next => get pdf
                .then((res) => 
                    axios.get(`/api/v1/offer/fetchpdf`, {responseType:'blob'})//to fetch the generate pdf
                    .then((res)=>{
                        const pdfBlob = new Blob([res.data],{type:'application/pdf'})
                        //to save we use filesaver
                        saveAs(pdfBlob,'OfferLetterDocument.pdf')
                    })
                    
                    .then(()=>
                        
                        axios.post(`/api/v1/offer/sendpdf`, {email: offer.email, joiningDate: offer.date, position: offer.title, name: offer.applicantname})
                        .then(res => {
                            console.log(res)
                            alert(res.data)
                            
                        })
                            
                    )

                )
        // e.preventDefault();
        try {
            const newoffer = {...offer }

            const res = await axios.post(`/api/v1/offer/createoffer`, newoffer, {
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

    // const newoffer = async(e) => {
    //     e.preventDefault();
    //     try {
    //         const newoffer = {...offer }

    //         const res = await axios.post(`/api/v1/offer/createoffer`, newoffer, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //                 // 'Authorization': token
    //             }
    //         })

    //         toast.success(res.data.msg)
    //         navigate(`/admin/manageoffer`)
    //     } catch (err) {
    //         toast.error(err.response.data.msg)
    //     }
    // }

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
                                    {/* <small>Enter Your Mail Id</small> */}
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
                                    {/* <small>Enter the Date</small> */}
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
                                <button type="submit"  className="btn btn-outline-primary btn-lg me-3">Send mail</button>
                                 {/* <button type="submit" className="btn btn-outline-secondary btn-lg me-3">Post Job</button> */}
                                 {/* <useNavigate to = {'/admin/manageoffer'} type="submit" className="btn btn-outline-secondary btn-lg  " onClick={newoffer}>dashboard</useNavigate>  */}
                                <NavLink  type="cancel" to={'/admin/manageoffer'}className="btn btn-outline-secondary btn-lg  ">Cancel</NavLink> 
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


