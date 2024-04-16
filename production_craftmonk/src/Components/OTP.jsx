import { useState } from "react";

function OTP() {
    
    
    
const [OTP, setOTP]=useState('');
const[box1, setBox1]=useState(''); 
const[box2, setBox2]=useState('');
const[box3, setBox3]=useState('');
const[box4, setBox4]=useState('');
const[Flag, setFlag]=useState(false)

    function otpGenerator() {

        let digits = "0123456789";
        let OTP = '';
        let len = digits.length;
    
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * len)]
        }
        console.log(OTP);
   
    setOTP(OTP.toString());
    }
    

    function handleSubmit(){
      
      
            const combinedNumber = parseInt(box1 + box2 + box3 + box4);
            console.log('Combined Number:', combinedNumber);
          if(combinedNumber===OTP){
setFlag(true)
          }else{
            setFlag(false)
          }
console.log(Flag);
    }

   return ( <div>
        <input type="number" value={box1} onChange={(e)=>setBox1(e.target.value) }></input>
        <input type="number" value={box2}  onChange={(e)=>setBox2 (e.target.value) }></input>
        <input type="number" value={box3} onChange={(e)=>setBox3 (e.target.value) }></input>
        <input type="number" value={box4} onChange={(e)=>setBox4 (e.target.value) }></input>
        <button onClick={otpGenerator}>Send Otp</button>
        <button onClick={handleSubmit}>Verify</button>
        <h1>OTP: {OTP}</h1>
        {Flag?<h1>Verified</h1>:<h1>Failed</h1>}
    </div> );
}

export default OTP;