import React from 'react'
import './Slider.css'
import { useNavigate } from 'react-router-dom'
const Slider=()=>{
    const navigate=useNavigate();
    return(
        <>
          <div id='slider'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" id='slide1'>
      <img src="https://plus.unsplash.com/premium_photo-1681967058815-b3853bd74eab?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100 h-100" alt="..."/>
      
    </div>
   <button id='register' onClick={()=>navigate('/signup')}>Register Now</button>
</div>
 
 
</div>
          </div>
        </>
    )
}
export default Slider;