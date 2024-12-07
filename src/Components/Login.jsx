import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login=()=>{
    const[message,setmessage]=useState('');
    
    const[clicked,setclicked]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=async(event)=>{
        event.preventDefault();
        setclicked(true);
        

        const email=document.getElementById('useremail').value;
        const pass=document.getElementById('userpassword').value;
        const data={
            
            email,
            pass,
        }
console.log(data);
        try{
            const response=await fetch('https://donor.dns.army/login',{
                method:'POST',
                headers:
                {
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(data)

            })
            
            const responseData=await response.json();
            setmessage(responseData.message);

            if(responseData){
                localStorage.setItem('email',email);
             
            }
       
            
        }
      
    
    
     catch(error){
        console.log(error);
     }
    
   
    }
    useEffect(()=>{
        if(clicked){
          
            setTimeout(()=>{
                setclicked(false);
                 
            },1800)
          if(message==='Login Sucessful'){
            setTimeout(()=>{
                
                navigate('/dashboard');
            },1800)

        }
    }
    })
    

return(
    <>
     <div id='loginpage'>
     <div className='login-message' style={{display:clicked?'block':'none'}}>{message}</div>
      <div className='login-form'>
      <form onSubmit={handleSubmit}>

  <div class="mb-3">
    <label for="name" class="form-label">EMAIL</label>
    <input type="text" class="form-control" id="useremail" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">PASSWORD</label>
    <input type="password" class="form-control" id="userpassword"/>
  </div>


 
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
</form>
        </div>    

     </div>
    </>
)
}
export default Login;
