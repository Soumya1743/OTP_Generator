let para = document.getElementById('para');
let para2 = document.getElementById('para2');
let number = document.getElementById('number');
let myotp = document.getElementById('myotp');


let button = document.getElementById('button');
button.addEventListener('click', GenerateOTP);
let submit = document.getElementById('submit');
submit.addEventListener('click', SubmitOTP);

var numbers = /[0-9]/;
var numberLength = 10;
var digits = '012345789';
var len = digits.length;
var otp = '';
function GenerateOTP(){
    if(number.value.match(numbers) && number.value.length==numberLength){

        for(let i=0; i<=5; i++){
            otp += Math.floor(Math.random()*len);
            para.innerHTML = "Your OTP is : " + otp;
            para.style.display = "block";
            para.style.color = "white";
        }
        return otp;
    }
}


function SubmitOTP(){
    if(otp==myotp.value){
        para2.innerHTML = "Your OTP is Verified!";
        para2.style.color = "white";
    }
    else{
        para2.innerHTML = "Wrong OTP!";
        para2.style.color = "white";
    }
}
