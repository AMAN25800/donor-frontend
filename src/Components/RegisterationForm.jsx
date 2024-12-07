import React, { Component, useEffect, useState } from 'react'

import './RegisterationForm.css';



const RegiserationForm=()=>{
  const[registermessage,setregistermessage]=useState("");
  const[registerbuttonclicked,setregisterbuttonclicked]=useState(false);
    const handleUserData=async(event)=>{
        


        event.preventDefault();
        
        const mail=localStorage.getItem('email');
        const userName=document.getElementById('username').value;
        const userAge=document.getElementById('userage').value;
        const userPhone=document.getElementById('userphone').value;
        const address1=document.getElementById('address1').value;
        const address2=document.getElementById('address2').value;
        const usercity=document.getElementById('usercity').value;
        const userstate=document.getElementById('userstate').value;
        const BloodGroup=document.getElementById('userblood').value;
        const userAddress=address1+" "+address2+" "+usercity+" "+userstate;
        const data={
            SourceMail:mail,
            userName,
            userAge,
            userPhone,
            BloodGroup,
            userAddress,
          
        }
   const response=await fetch('https://donor.dns.army/save-user',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
   })
            const responseData=await response.json();
            setregistermessage(responseData.message);
            setregisterbuttonclicked(true);
            setTimeout(()=>{
              setregisterbuttonclicked(false);

            },2500)
  }
    return(
     
        <>
          <div id='userregister'>
            <div id='user'>
                <img src='https://media.istockphoto.com/id/1295918934/photo/uses-laptop-while-talking-with-patient-stock-photo.jpg?s=2048x2048&w=is&k=20&c=STOKUCxHdpcbnZjWo1HrnZmSS5wVyBCJt-84_jWDV-s='></img>
                <div className='register-message' style={{display:registerbuttonclicked?'block':'none'}}>{registermessage}</div>
            <form onSubmit={handleUserData}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">NAME</label>
    <input type="text" class="form-control" id="username" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">AGE</label>
    <input type="text" class="form-control" id="userage"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">BLOOD GROUP (IN CAPITAL)</label>
    <input type="text" class="form-control" id="userblood"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">PHONE</label>
    <input type="text" class="form-control" id="userphone"/>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">ADDRESS LINE 1</label>
    <input type="text" class="form-control" id="address1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">ADDRESS LINE 2</label>
    <input type="text" class="form-control" id="address2"/>
  </div>
  
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">CITY</label>
    <input type="text" class="form-control" id="usercity"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">STATE</label>
    <input type="text" class="form-control" id="userstate"/>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={handleUserData}>Submit</button>
</form>
            </div>

          </div>
        </>
    )

}
export default RegiserationForm;