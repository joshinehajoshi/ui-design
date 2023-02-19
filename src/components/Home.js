import React, {useState} from 'react';
import '../assets/styles/header.css';
import Sidebar from './Sidebar';
import Target from './Target';
import Header from './Header'
import MarketCard from './MarketCard';
import Performance from './Performance';
import InvestorDetails from './InvestorDetails';
import SIP from './SIP';


function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const openCloseHandler = () => {
      setIsOpen(!isOpen)
      console.log(isOpen)
  }

  return (
    <>
    <div className='header-wrapper'>
      <Sidebar isOpen={isOpen} />
      <div className="h-wrapper">
      <Header  openCloseHandler={openCloseHandler}/>
    <div className='row'>
    <div className='col-md-10'>
      <Target />
      <Performance />
      <InvestorDetails />
      <SIP />
    </div>
    <div className='col-md-2'>
     <MarketCard color = "#ececff"/>
     <MarketCard color="#fff1d7"/>
     <MarketCard color="#f3daff"/>
     <MarketCard color="#ddf5ff"/>
    </div>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Home