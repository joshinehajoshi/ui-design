import React from 'react';
import '../assets/styles/sip.css';
import pieCart from '../assets/images/Ellipse103.png'
import SIPCard from './SIPCard';

function SIP() {
  return (
    <>
    <div className="target-wrapper">
      <div className="row">
        <div className="col-md-8 target-header-wrapper">
          <div className="target-header">
            <h5>Your SIPs</h5>
          </div>
          <div className="target-card-wrapper">
            <SIPCard />
            <SIPCard />
          </div>
        </div>
        <div className="col-md-4 target-chart-wrapper">
          <img src={pieCart}></img>
        </div>
      </div>
    </div>
  </>
  )
}

export default SIP