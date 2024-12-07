import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import DashboardNav from './DashboardNav';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState([]); // Improved variable naming for clarity
  const [hospitalName,sethospitalName]=useState("");
  const[loader,setloader]=useState(true);
  useEffect(()=>{
    
    setTimeout(()=>{
       setloader(false);
    },3000)
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve email from localStorage
        const email = localStorage.getItem('email'); // Ensure the key matches your storage setup
        if (!email) {
          console.error("No email found in localStorage");
          return;
        }

        console.log(`Fetching data for email: ${email}`);
        
        // Fetch data from the API
        const response = await fetch(
          `https://donor.dns.army/fetchdata?email=${encodeURIComponent(email)}`,
          { method: 'GET' }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setUserData(result); // Set the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally reset the state in case of failure
        setUserData({});
      }
    };

    fetchData();
  }, []); // Dependency array left empty as there are no dynamic dependencies

  console.log("User Data:", userData);
  useEffect(()=>{
    userData && userData.data && userData.data.map((item)=>{
      let name=item.hospitalName.substring(0,1).toUpperCase();
      name+=item.hospitalName.substring(1).toLowerCase();
      sethospitalName(name);
      localStorage.setItem('hospitalName',hospitalName);
    })
  })

  return (
    <>

      <div id="dashboard" >
 

      <svg width="150px" height="75px" viewBox="0 0 187.3 93.7" preserveAspectRatio="xMidYMid meet" style={{display:loader?'block':'none'}}>
    <path stroke="purple" id="outline" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 -8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"></path>
    <path id="outline-bg" opacity="0.05" fill="none" stroke="#f5981c" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 -8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"></path>
</svg>
        <div className="dash-nav">
          <DashboardNav hospitalName={hospitalName} />
        </div>
    
        <div className="dashboard-content" style={{filter:loader?"brightness(15%)":"brightness(100%)"}}>
        
          {userData ? (
            <>
            {userData.data && userData.data.map((item)=>{

            return(
              <>
              <div id='cards'>
              <div class="card" style={{width: "18rem"}}>
  <img src="https://cdn-icons-png.freepik.com/256/14785/14785124.png?ga=GA1.1.1962969448.1717676862&semt=ais_hybrid" class="card-img-top" alt="..." height={"150px"} />
  <div class="card-body">
    <h5 class="card-title">Feedback</h5>
    <p class="card-text">Patient can give their feedback on whether they like our services or something we can improve for satisfying customer needs</p>
    <Link to="/feedback" class="btn btn-primary">Register For Feedback</Link>
  </div>
  
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://cdn-icons-png.freepik.com/256/16143/16143242.png?ga=GA1.1.1962969448.1717676862&semt=ais_hybrid" class="card-img-top" alt="..." height={"150px"} />
  <div class="card-body">
    <h5 class="card-title">Blood Donor</h5>
    <p class="card-text">By Registering for this option we can help the patient to get their donor easily by searching the blood donor required to the patient</p>
    <Link to="/donor" class="btn btn-primary">Register Here</Link>
  </div>
  
</div>
<div class="card" style={{width: "18rem"}}>
  <img src="https://cdn-icons-png.freepik.com/256/10852/10852678.png?ga=GA1.1.1962969448.1717676862&semt=ais_hybrid" class="card-img-top" alt="..." height={"150px"} />
  <div class="card-body">
    <h5 class="card-title">Track Request</h5>
    <p class="card-text">By Clicking this button you can see who all are eligible or active to give the blood.You can track the list of blood donors</p>
    <Link to="/application" class="btn btn-primary">Track Your Request</Link>
  </div>
  
</div>


</div>
              </>
             
            )
            })
          }
            </>
         
        
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
