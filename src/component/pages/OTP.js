import React, { useState } from 'react';
import DefaultLayout from '../defaultLayout/DefaultLayout';
import "../css/OTP.css";
import { useNavigate } from 'react-router-dom';

function OTP() {


 

  const nav = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length > 1) return; // Prevents entering more than one character

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input if there's a value
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    nav("/card");
  };

  return (
    <>
      <DefaultLayout />
      <div className='Box-border'>
        <p className='text-center mt-5 text-danger'>
          An OTP has been sent to your registered email address. Please check your inbox and enter the code to proceed.
        </p>

        <div  className='d-flex justify-content-center otp_input'>
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              className='form-control otp-box'
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
            />
          ))}
        </div>

        <div>
          <button onClick={handleSubmit} className='btn btn-danger p-2 pl-5 pr-5 nxt_btn'>Next</button>
        </div>
      </div>
    </>
  );
}

export default OTP;
