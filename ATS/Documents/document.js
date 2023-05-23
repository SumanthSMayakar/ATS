

module.exports = ({applicantname,title ,number,date  })=>{
    const today = new Date()
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Offer Letter</title>
            </head>

            <body>
            <div className='container' style=" max-width: 800px;
            margin: auto;padding: 20px;border: 1px solid #eee;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 16px;line-height: 16px;color: #555;">
            <div className="row">
              <div className="col-md-12 mt-4 ">
                  <div className="card card-shadow">
                      <div className="card-header ps-5" style="margin-bottom: 40px;" >
                          <div className="row">
                              <div className="col-md-6 ps-5 mt-4">
                                  <h4 style="margin-bottom: -10px;font-size:25px">Be-Practical Pvt. Ltd.</h4>
                                  <p>22 East 12<sup>th</sup> Street 
                                  <br /> 
                                  Bangalore, India 
                                  <br />
                                  <b>Contact:</b> +91-8775768585
                                  <br />
                                  <b>Email:</b> bepractical@gmail.com
                                  </p>
      
                              </div>
                              <div className="col-md-6 text-end mt-5 pe-5 " style="text-align: right;position :relative; margin-top:-120px">
                                  <span>
                                      <img src="https://wilcity.com/wp-content/uploads/2018/12/sample-logo-design-png-3-2.png" alt="No image found" className='logoImg' style="width:100%; max-width:156px;text-align: right;"/>
                                      
                                  </span>
                              </div>
                          </div>
                      </div>
                      <hr >
                      <div className="card-body mt-3 offerBody">
                            <h4 className="display-4 text-center head" style="text-align:center; margin-bottom: 60px;font-weight:bolder;font-size: 28px;color: rgb(109, 107, 107);">Offer Letter</h4>
                          <p style="margin-top: 30px;">${today.getDate()}/${today.getMonth()}/${today.getFullYear()}
                              <br /><br />
                              <b >Sub :</b> Offer of employment as ${title}
                              <br /><br />
                              Dear ${applicantname},
                              <p className='mt-3' style="text-align:justify;margin-left: 40px;">   After thorough evaluation of your performance, we are glad to inform you that you have been confirmed in the capacity
                              of ${title} at Be-Practical Pvt. Ltd. We feel confident
                              that you will contribute your skills and experience towards the growth of our organization.
                              <br /><br />
                              As per the discussion, your starting date will be on ${date}. The terms and conditions of your employment
                              and your job responsibilities are enlocsed as annexure A.
                              <br /><br />
                              Your CTC package will be ${number} lacs p.a. You may please contact the HR department for the necessary break-up. We
                              thank you for your contribution made to your process and hope that you will perform with equal enthusiasm in future.
                              We wish you all the best in all your endeavors.
                              <br /><br /></p>
                              Yours faithfully,
                              <br />
                              for <b>Be-Practical Pvt. Ltd.</b></p>
                             
                              <img className='sign' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLcb2JGrfYl1N3YCtQvCsfzwaAftt6hnprQ&usqp=CAU" alt="no image found" style="height: 70px;margin-top: -20px;"/>
                              <p style="margin-top: -10px">Vice President & CFO</p>
                          </p>
                          
                      </div>
                      <br><br>
                      
                      <div class="card-body" style="margin-top:100px">
                        <h3 style="text-align: center;margin-top:30px">Annexure A</h3>
                
                        <h4>1. Posting and Transfer</h4>
                        <p>Your services are liable to be transferred, at the sole discretion of Management, in such other capacity as the company may determine, to any department / section, location, associate, sister concern or subsidiary, at any place in India or abroad, whether existing today or which may come up in future. In such a case, you will be governed by the terms and conditions of the service applicable at the new placement location.</p>
                    
                        <h4>2. Probation</h4>
                        <p>That you will be on probation for a period of six months. The period of probation can be extended at the discretion of the Management and you will continue to be on probation till an order of confirmation has been issued in writing.</p>
                    
                        <h4>3. Full time employment</h4>
                        <p>Your position is a whole time employment with the Company and you shall devote yourself exclusively to the business and interests of the company. You will not take up any other work for remuneration (part time or otherwise) or work in an advisory capacity, without permission in writing of the Management of the Company. </p>
                        
                        <h4>4. Confidentiality</h4>
                        <p>You will not, at any time, during the employment or after, without the consent of the Management disclose or divulge or make public, except on legal obligations, any information regarding the Company’s affairs or administration or research carried out, whether the same is confided to you or becomes known to you in the course of your service or otherwise.</p>
                    
                        <h4>5. Intellectual Property</h4>
                        <p>If you conceive any new or advanced method of improving designs/ processes/ formulae/ systems, etc. in relation to the business/ operations of the Company, such developments will be fully communicated to the company and will be, and remain, the sole right/ property of the Company.</p>
    
                        <h4>6. Responsibilities & Duties</h4>
                        <p>Your work in the organization will be subject to the rules and regulations of the organization as laid down in relation to conduct, discipline and other matters. You must effectively perform to ensure results.</p>
                        <br>

                        <h4>7. Past Records</h4>
                        <p>This letter of appointment is based on the information furnished in your application for employment and during the interviews you had with us. If any declaration given, or information furnished by you, to the company proves to be false, or if you are found to have willfully suppressed any material information, in such cases, you will be liable to removal from services without any notice.</p>
                    
                        <h4>8. Termination of employment</h4>
                        <p>During the probationary period and any extension thereof, your services may be terminated without giving any notice or salary in lieu thereof. However, on confirmation the services can be terminated from either side by giving one month (30 days) notice or salary in lieu thereof.
                            Upon resignation/termination of employment, you will immediately hand over to the Company all correspondence, specifications, formulae, books, documents, market data, cost data, drawings, affects or records belonging to the Company or relating to its business and shall not retain or make copies of these items.
                             This will be without payment of any compensation.
                                <ul>
                                    <li>If you fail, refuse or neglect to carry out and perform your duties assigned to you by the company.</li>
                                    <li>For loss of confidence in you by the company for any of the act committed by you.</li>
                                    <li>If you are found to be guilty of fraud, insubordination or misconduct whether in course of performance of duties entrusted to you or otherwise.</li>
                                    <li>If you are found unfit for being entrusted with the responsible work commensurate with your position in consequences of any misconduct, moral turpitude.  If you commit any act prejudicial to the continuing good relationship between you and the company.</li>
                                    <li>If you commit breach of any of the terms of this letter of appointment</li>
                                </ul>
                            </p>
                            <h4>9. Authority</h4>
                            <p>No authority is vested upon you to make any financial commitment and enter into agreements/contracts/understandings of any nature with any second party and third party without seeking the prior permission/approval of the management. Any violation to exceed your specified authority as mentioned will be seriously viewed and disciplinary/appropriate legal action will be taken.</p>
                
                    
                      </div>
                      <hr>
                      <footer>
                        <div className="card-footer" style="margin: 10px;">
                            <div className="row ms-5 ps-4">
                                <div className="col-md-6 mt-3 mb-3 ms-4">
                                    <span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1821JDFF-eNQOkVJTMF6pYwaDrT4pwIZVdA&usqp=CAU" alt="" style="width: 40px;">
                                        <p style="position:relative; margin-top:-30px;margin-left:40px;">+91-8775768585</p>
                                    </span>
                                </div>
                                <div className="col-md-5 mt-3 mb-3 " style="text-align: right;margin-top: -40px;">
                                    <span>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88oeC6hewBD8z8KAkzFTR0V70dWn9WkKCBg&usqp=CAU" alt="" style="width: 40px;margin-right:140px ;margin-top: 0px;">
                                        <p style="position: relative;margin-top:-40px">22 East       12<sup>th</sup> Street <br>
                                            Bangalore, India </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                      </footer>
                  </div>
              </div>
            </div>
          </div>

        </body>
     </html
    `
}