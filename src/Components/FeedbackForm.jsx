import React, { useState } from 'react'
import './FeedbackForm.css';
const FeedbackForm=()=>{
  const[feedbackmessage,setfeedbackmessage]=useState("");
  const[buttonclicked,setbuttonclicked]=useState(false);
    const handlePatientData=async(event)=>{
        event.preventDefault();
        const PatientName=document.getElementById('patientname').value;
        const Age=parseInt(document.getElementById('patientage').value);
        const PhoneNumber="+91"+document.getElementById('patientphone').value;
        const email=document.getElementById('patientemail').value;
        const Gender=document.getElementById('gender').value;
        const address1=document.getElementById('address1').value;
        const address2=document.getElementById('address2').value;
        const address3=document.getElementById('address3').value;
        const address4=document.getElementById('address4').value;
        const BloodGroup=document.getElementById('bloodgroup').value;
        const Address=address1+" "+address2+" "+address3+" "+address4;
        
        try{
            const data={
                PatientName,
                Age,
                PhoneNumber,
                email,
                Gender,
                Address,
                BloodGroup
    
            }
           
       const response=await fetch('https://donor.dns.army/savedata',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(data)
          
       })
       const responseData=await response.json();
       setfeedbackmessage(responseData.message);
       setbuttonclicked(true);
       setTimeout(()=>{
        setbuttonclicked(false);

       },3000)
      
        if(responseData.success){
            const name=localStorage.getItem('hospitalName');
            
            const emailData={
                from:name,
                to:email,
                subject:'FEEDBACK',
                text:`Dear ${PatientName.toUpperCase()},\n Thanks for giving us feedback we pray for your good health\n Here are some advices to keep your body fit\n\n1. Drink lots of water\n\n2. Don't eat junk food\n\n3. Eat Green vegetables or dairy products\n\n4. Eat less Suger if possible(OPTIONAL)\n\nFor Any Assistance You Can Call Us On Number +917000577419\n\nHave a good day  `
            }
            const emailResponse=await fetch('https://donor.dns.army/send-email/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(emailData),
                
            })
           const emailResponseData=await emailResponse.json();
           console.log(emailResponseData);
        }
       

    }
    catch(error){
        console.log(error);
    }
    }
    
    return(
 <>
 <div id='feedback'>
    <div id='image'>
        <img src='https://media.istockphoto.com/id/1295918822/photo/uses-laptop-while-talking-with-patient-stock-photo.jpg?s=2048x2048&w=is&k=20&c=C_Av22dwc5T2AAJd6HsmddAeW5fDBilxql6yiI8_d9Y='/>
    </div>
    <div className='feedback-message' style={{display:buttonclicked?'block':'none'}}>{feedbackmessage}</div>
 <form >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Patient Name</label>
    <input type="text" class="form-control" id="patientname" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Patient Age</label>
    <input type="number" class="form-control" id="patientage"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Gender</label>
  <br/>
    <select style={{width:'100%'}} id='gender'>
        <option>Male</option>
        <option>Female</option>
    </select>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="patientphone"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email Address</label>
    <input type="text" class="form-control" id="patientemail"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control" id="address1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address Line 2</label>
    <input type="text" class="form-control" id="address2"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">City</label>
    <input type="text" class="form-control" id="address3"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Pincode</label>
    <input type="text" class="form-control" id="address4"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Blood Group (IN CAPITAL)</label>
    <input type="text" class="form-control" id="bloodgroup"/>
  </div>

   

  <button type="submit" class="btn btn-primary" onClick={handlePatientData}>Submit</button>
</form>
 </div>
 </>
    ) 
}
export default FeedbackForm;