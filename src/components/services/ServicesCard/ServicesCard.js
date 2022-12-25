import React from "react";
import "./ServicesCard.css";
import serviceLogo from "../../../data/serviceLogo.png";
function ServicesCard({ heading }) {
  return (
    <div className="serviceCard text-center col-md-4 px-2 border-danger">
      <div className="card-bodyy">
      <div className="servicesLogo">
        <img className="img-fluid rounded-circle" src={serviceLogo} alt="" />
      </div>
      <h3>{heading}</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
        voluptatibus! Ducimus exercitationem sequi natus aut a quis, ipsam
        labore delectus!
      </p>
      </div>
    </div>
  );
}

export default ServicesCard;
