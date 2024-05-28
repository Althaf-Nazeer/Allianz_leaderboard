import React from 'react';
import unfluke from './assets/unfluke.png'; 
import bellIcon from './assets/bell.png'; 
import coinIcon from './assets/coin.jpg'; 
import profileIcon from './assets/monkey.png'; 
import box from './assets/box.png'; 
import './App.css';

function App() {
  return (
    <>
      <div>
        <img src={unfluke} className="unfluke" alt="unfluke logo" />
        <div className="nav-container">
          <div className="nav">
            <div className="nav-items">
              <button className="nav-link">
                <img src={bellIcon} alt="bell" className="icon" />
              </button>
              <button className="nav-link">
                <img src={coinIcon} alt="coin" className="icon" />
              </button>
              <div className="dropdown">
                <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={profileIcon} alt="user profile" className="profile-icon" />
                </button>
                <ul className="dropdown-menu shadow-sm rounded-0 mt-3" aria-labelledby="navbarDropdown">
                  <li className="p-2"><a className="dropdown-item" href="/profile">My Profile</a></li>
                  <li className="p-2"><a className="dropdown-item" href="/leads">My Earnings</a></li>
                  <li className="p-2"><a className="dropdown-item" href="/funds">Funds</a></li>
                  <li className="p-2"><a className="dropdown-item" href="/change-password">Change Password</a></li>
                  <li className="p-2"><a className="dropdown-item" href="/" style={{ color: 'red' }}>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
      <div className="blue-row">
        <div className='firstele'><img src={box} className="box" alt="box" /> <span className="blue-link">LeaderBoard</span></div>
        
        <span className="blue-link">Historical Trading</span>
        <span className="blue-link">Historical Chart</span>
        <span className="blue-link">Scanners</span>
        <span className="blue-link">Alerts</span>
        <span className="blue-link">Basic Backtest</span>
        <span className="blue-link">Advanced Backtest</span>
        <span className="blue-link">Pricing</span>
        <span className="blue-link">My Earnings</span>
      </div>
      <div className='heading'>LeaderBoards</div>
      <div className="table">
       
  <table>
    <thead>
    <tr>
    <th className="one" colSpan={8}>Basic Backtest</th>
  </tr>
      <tr>
      
        <th>Rank</th>
        <th>Name</th>
        <th>Calmar Ratio</th>
        <th>Overall Profit</th>
        <th>Avg. Daily Profit</th>
        <th>Win % (Day)</th>
        <th>Price (Rs)</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {[...Array(10)].map((_, index) => (
        <tr key={index + 1}>
          <td>{index + 1}</td>
          <td>Trader {index + 1}</td>
          <td>2.5</td>
          <td>$1000</td>
          <td>$50</td>
          <td>70%</td>
          <td>500</td>
          <td><button>Action</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </>
  );
}

export default App;