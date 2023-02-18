import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import '../assets/styles/performance.css';
import group from '../assets/images/Group.png';
import PerformanceCard from "./PerformanceCard";
import Button from 'react-bootstrap/Button';

function Performance() {
  return (
    <>
      <div className="target-wrapper">
      <div className="performance-header">
              <h5>Your Performance</h5>
              <div className="dropdown-wrapper">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="1 Year"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Both"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
        <div className="row">
          <div className="col-md-7 performance-content-graph">
          <img src={group} />
            
          </div>
          <div className="col-md-5 performance-content-button-card">
            <div className="performance-button-wrapper">
            <Button variant="primary" className="performance-btn">By Asset Class</Button>
            <Button variant="primary"className="performance-btn">By Licenses</Button>
            </div>
            <div className="performance-card-wrapper">
           <PerformanceCard />
           <PerformanceCard />
           <PerformanceCard />
           <PerformanceCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Performance;
