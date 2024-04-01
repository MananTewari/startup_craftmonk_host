function otpGenerator() {

    let digits = "0123456789";
    let OTP = '';
    let len = digits.length;

    for (i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * len)]
    }


    return OTP;
    
}
console.log(OTP);
export default otpGenerator;