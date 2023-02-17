import React, {useState} from 'react';
import '../assets/styles/header.css';
import Sidebar from './Sidebar';
import Target from './Target';
import Header from './Header'
import MarketCard from './MarketCard';


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
      <Target />
      <Target />
      <Target />
    </div>
    <div className='col-md-2'>
     <MarketCard />
     <MarketCard />
     <MarketCard />
     <MarketCard />
    </div>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Home