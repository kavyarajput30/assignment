import './Card.css'
import Vector from './../../images/Vector.jpg'

const Card =() => {
    return(
        <div id="card-main-div">
            
           <div id="card-div-1">
             <h2 id="card-heading">Full Stack Web Developer</h2>
            <p id="card-info">lorem ipsum epsum lorem emposh lorem</p>
            {/* <img src={Vector} id="card-image"></img> */}
            <div id="card-main-info">
                <div>100% Placement</div>
                <div>8+ Projects</div>
                <div>4.5/5</div>
                <div>Study at your own Pace</div>
            </div>
            <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card ;