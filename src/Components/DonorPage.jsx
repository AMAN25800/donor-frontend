import React, { useState } from 'react'
import './DonorPage.css'
const DonorPage=()=>{
  const [donormessage,setdonormessage]=useState("");
  const [donorbuttonclicked,setdonorbuttonclicked]=useState(false);
    const handleRecipientData=async(event)=>{
        event.preventDefault();
        const recipientName=document.getElementById('recipientname').value;
        const recipientAge=document.getElementById('recipientage').value;
        const recipientEmail=document.getElementById('recipientemail').value;
        const recipientPhone=document.getElementById('recipientphone').value;
        const recipientGender=document.getElementById('recipientgender').value;
        const recipientBlood=document.getElementById('recipientblood').value;
        const hospitalName=localStorage.getItem('hospitalName');
        const data={
            hospitalName,
            recipientName,
            recipientAge,
            recipientGender,
            recipientEmail,
            recipientPhone,
            recipientBlood
            
        }
        try{
            const response=await fetch('https://donor.dns.army/recipientdata',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data),
            })
            const recipientResponse=await response.json();
            if(recipientResponse){
                setdonormessage("Application sent sucessful");
            }

        }
        catch(error){
            console.log(error);
        }
setdonorbuttonclicked(true);
setTimeout(()=>{
  setdonorbuttonclicked(false);
},3000);



    }
return(
    <>
    <div id='donorpage'>
      <div id='donorimage'>
        <img src='https://media.istockphoto.com/id/1295918822/photo/uses-laptop-while-talking-with-patient-stock-photo.jpg?s=2048x2048&w=is&k=20&c=C_Av22dwc5T2AAJd6HsmddAeW5fDBilxql6yiI8_d9Y=' class="d-block w-100 h-100"/>
    </div>
    <div className='donor-message' style={{display:donorbuttonclicked?'block':'none'}}>{donormessage}</div>
    
 <form >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Patient Name</label>
    <input type="text" class="form-control" id="recipientname" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Patient Age</label>
    <input type="number" class="form-control" id="recipientage"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Gender</label>
  <br/>
    <select style={{width:'100%'}} id='recipientgender'>
        <option>Male</option>
        <option>Female</option>
    </select>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="recipientphone"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email Address</label>
    <input type="text" class="form-control" id="recipientemail"/>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Blood Group Required (CAPITAL)</label>
    <input type="text" class="form-control" id="recipientblood"/>
  </div>

   

  <button type="submit" class="btn btn-primary" onClick={handleRecipientData}>Submit</button>
</form>
</div>
    </>
)
}
export default DonorPage;

