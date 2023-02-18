import React from "react";
import "../assets/styles/target.css";
import TargetCards from "./TargetCards";
import pieCart from '../assets/images/Ellipse103.png'
import { TargetCardData } from "../Data/TargetCardData";

function Target() {
  return (
    <>
      <div className="target-wrapper">
        <div className="row">
          <div className="col-md-8 target-header-wrapper">
            <div className="target-header">
              <h5>Your Tragets</h5>
            </div>
            <div className="target-card-wrapper">
              {
                TargetCardData?.map((item) => {
                  return(
                    <>
                     <TargetCards img={item.img} data={item.data} id={item.id} color={item.color}  />
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className="col-md-4 target-chart-wrapper">
            <img src={pieCart}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Target;
