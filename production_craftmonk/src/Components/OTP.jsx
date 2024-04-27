import React, { useState, useRef } from "react";


function OTP() {
  const [OTP, setOTP] = useState('');
  const [box1, setBox1] = useState(''); 
  const [box2, setBox2] = useState('');
  const [box3, setBox3] = useState('');
  const [box4, setBox4] = useState('');
  const [Flag, setFlag] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Track whether OTP has been sent
  const [verificationMessage, setVerificationMessage] = useState('');

  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  function otpGenerator() {
    let digits = "0123456789";
    let OTP = '';
    let len = digits.length;

    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * len)]
    }
    console.log(OTP);
    setOTP(OTP.toString());
    setOtpSent(true); // Set otpSent to true when OTP is generated
  }

  const handleInputChange = (index, value) => {
    if (value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
    switch (index) {
      case 0:
        setBox1(value);
        break;
      case 1:
        setBox2(value);
        break;
      case 2:
        setBox3(value);
        break;
      case 3:
        setBox4(value);
        break;
      default:
        break;
    }
  };

  function handleSubmit() {
    const combinedNumber = parseInt(box1 + box2 + box3 + box4);
    console.log('Combined Number:', combinedNumber);

    if (combinedNumber === parseInt(OTP)) {
      setFlag(true);
      setVerificationMessage('Verification Successful');
      // Redirect to registration page
      
    } else {
      setFlag(false);
      setVerificationMessage('Verification Failed');
    }
  }

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', animation: 'fadeInUp 0.5s forwards' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register Phone Number</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <input type="tel" style={{ width: '30px', height: '40px', textAlign: 'center', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px' }} maxLength={1} value={box1} onChange={(e) => handleInputChange(0, e.target.value)} ref={inputRefs.current[0]}></input>
          <input type="tel" style={{ width: '30px', height: '40px', textAlign: 'center', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px' }} maxLength={1} value={box2} onChange={(e) => handleInputChange(1, e.target.value)} ref={inputRefs.current[1]}></input>
          <input type="tel" style={{ width: '30px', height: '40px', textAlign: 'center', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px' }} maxLength={1} value={box3} onChange={(e) => handleInputChange(2, e.target.value)} ref={inputRefs.current[2]}></input>
          <input type="tel" style={{ width: '30px', height: '40px', textAlign: 'center', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px' }} maxLength={1} value={box4} onChange={(e) => handleInputChange(3, e.target.value)} ref={inputRefs.current[3]}></input>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button onClick={otpGenerator} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', outline: 'none' }} disabled={otpSent}>Send OTP</button>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button onClick={handleSubmit} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', outline: 'none' }}>Verify</button>
        </div>
        <h4 style={{ textAlign: 'center', marginTop: '20px' }}>OTP: {OTP}</h4>
        <h5 style={{ textAlign: 'center' }}>{verificationMessage}</h5>
      </div>
    </div>

    <div>
      <p>{OTP}</p>
    </div>
    </>
  );
}

export default OTP;
