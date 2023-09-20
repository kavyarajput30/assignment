import './Testimonials.css'
import TestimonialCard from './TestimonialCard'

const Testimonial = ()=>{
   return(
    <div  id="main-testimonial-div">
      <div id="testimonial-heading-rectangle"></div>
       <h1>Student Testimonials</h1>
       <div id="testimonial-card-cont">
         <TestimonialCard/>
         <TestimonialCard/>
         <TestimonialCard/>
       </div>
     
     </div>
   )
}

export default Testimonial;