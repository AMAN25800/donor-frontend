import React from 'react'
import './DashboardNav.css';
import { useNavigate } from 'react-router-dom';
const DashboardNav=({hospitalName})=>{
  const navigate=useNavigate();
  const handleLogout=()=>{
    const isLogout=window.confirm("Do you want to Logout?");
    if(isLogout){
      localStorage.removeItem('email');
      localStorage.removeItem('hospitalName');
      navigate('/');
    }
  }
  
 return(   
<>
  <div id='dashnavbar'>
  <nav class="navbar navbar-expand-lg " id='dashboardnav'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DONOR</a>
 
   
         <button class="btn btn-outline-success" type="submit" id='dashlogin'><img src='https://cdn-icons-png.flaticon.com/128/1177/1177568.png' height={"40px"} width={"45px"}/></button><p id='hospitalname'>{hospitalName}</p>
        <button id='logout' onClick={handleLogout}><img src='https://cdn-icons-png.flaticon.com/128/1246/1246273.png' height={"30px"} width={"30px"}/><br/>Logout</button>
  
  </div>
</nav>

  </div>
</>
 )
}
export default DashboardNav;
