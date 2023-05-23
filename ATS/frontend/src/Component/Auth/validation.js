import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'


function Validation (user) {

  let error ={}
   if(ReCAPTCHA == false){
    error.email = 'Invalid email address'
    
   }


    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
            error.email = 'Invalid email address'
    }
    if (!/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(user.password)) {
            error.password = 'Enter the strong password'
    }
    if(user.confirmpassword !== user.password){
            error.confirmpassword ="password not matched"
    }
  return error;
}

export default Validation
