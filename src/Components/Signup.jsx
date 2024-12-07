import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Signup.css';
const Signup=()=>{
    const[message,setmessage]=useState('');
     const [timer,settimer]=useState(false);
     const navigate=useNavigate();
    const handleSubmit=async(event)=>{
        event.preventDefault();
        
        const hospitalName=document.getElementById('name').value;
        const lisenceNumber=document.getElementById('license').value;
        const ownerName=document.getElementById('ownername').value;
        const email=document.getElementById('email').value;
        const pass=document.getElementById('password').value;
        const data={
            hospitalName,
            lisenceNumber,
            ownerName,
            email,
            pass,
        }
console.log(data);
        try{
            const response=await fetch('https://donor.dns.army/signup',{
                method:'POST',
                headers:
                {
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(data)

            })
            
            const responseData=await response.json();
            console.log(responseData.message);
            if(responseData){
                setmessage(responseData.message);

            }
        }
      
    
    
     catch(error){
        console.log(error);
     }
   settimer(true);
    }
    useEffect(()=>{
      if(timer){
        setTimeout(()=>{

          settimer(false);
         

        },1800)
        if(message==='Signup Sucessful'){
          setTimeout(()=>{

         
          navigate('/login');
          },2000);
        }
      }
    })

return(
    <>
     <div id='signup'>
      <div className='signup-form'>
        <div className='signup-message' style={{display:timer?'block':'none'}}>{message}</div>
      <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="name" class="form-label">HOSPITAL NAME</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="name" class="form-label">LICENSE NUMBER</label>
    <input type="text" class="form-control" id="license" aria-describedby="emailHelp"/>

  </div>

  <div class="mb-3">
    <label for="name" class="form-label">OWNER NAME</label>
    <input type="text" class="form-control" id="ownername" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="name" class="form-label">EMAIL</label>
    <input type="text" class="form-control" id="email" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">PASSWORD</label>
    <input type="password" class="form-control" id="password"/>
  </div>


 
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
</form>
        </div>    

     </div>
    </>
)
}
export default Signup;
