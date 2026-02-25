import { useState } from 'react'
import './index.css'
import Ranking from './ranking';
import Notifications from './Notifications';

function App() {
  const [count, setCount] = useState(0);
  const [mainPage, setMainPage] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [ranking, setRanking] = useState(false);


   const turnOnMainPage= function(){
    setMainPage(true);
    setNotifications(false);
    setRanking(false);
  }

  const turnOnRanking= function(){
    setMainPage(false);
    setNotifications(false);
    setRanking(true);
  }
  
  const turnOnNotifications = function(){
    setMainPage(false);
    setNotifications(true);
    setRanking(false);
  }
  return (
    <div className='main-container'>
      <ul className='menu-items'>
        <li className='menu-item-icon'></li>
        <li className='menu-item' onClick={turnOnMainPage}>Movie</li>
        <li className='menu-item' onClick={turnOnRanking}>Ranking</li>
        <li className='menu-item' onClick={turnOnNotifications} >Activities</li>
      </ul>
      {mainPage && <>
          <div className= 'main-title'>
            <h1 className='main-title-text'>Movie</h1>
          </div>
          <div className= 'second-title'>
            <h1 className='second-title-text'>Club</h1>
          </div>
        </>
      }
      <div className='main-sections'>
        { notifications && <div className='notifications-section'>
          <Notifications/>
        </div>}
        { ranking &&<div className='ranking-section'>
          <Ranking/>
        </div>}
      </div>
    </div>
  )
}


export default App


