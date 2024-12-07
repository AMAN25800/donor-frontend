import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbar=()=>{
    const navigate=useNavigate();
    return(
<>
<nav class="navbar navbar-expand-lg " id='nav'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DONOR</a>
  
    
         <button class="btn btn-outline-success" type="submit" id='login' onClick={()=>navigate('/login')}>LOGIN/SIGNUP</button>
      
  
  </div>
</nav>
</>
    )
}
export default Navbar;