import { useState } from 'react'
import './index.css'
import Ranking from './ranking';
import Notifications from './Notifications';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='main-container'>
      <h1 className='main-title'>Movie Club</h1>
      <div className='sections'>
        <div className='movie-image'>
          <div className='movie-image-container'> </div>
          </div>
        <div className='data-container'>
          <Notifications/>
          <Ranking/>
        </div>
      </div>
    </div>
  )
}

export default App
