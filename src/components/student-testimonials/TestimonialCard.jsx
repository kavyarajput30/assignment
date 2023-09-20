import "./TestimonialCard.css";
import Boy from "./../../images/Boy.png";
import Lnkdn from "./../../images/Lnkdn.png";
import Group_185 from "./../../images/Group_185.png";

const TestimonialCard = () => {
  return (
    <div id="student-card">
      <div id="icons">
        <img src={Group_185} alt="image" id="double-qoute-image" />
        <img src={Lnkdn} alt="image" id="linkdin-image" />
      </div>
      <p id="review">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div id="student-information">
        <img src={Boy} alt="image" id="student-image" />
        <div>
        <h2>Jheel Tripathi</h2>
        <p>12th Grade</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
