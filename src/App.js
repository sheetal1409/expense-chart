import React from 'react';
import './App.css';
import { Graph } from './Graph';
import { data } from "./data"

function App() {

  const mybalance = "972.12"

  return (
    <div className="App">
      <main>
        <section className='top-section'>
          <div className='my-balance'><h5>My Balance</h5>
            <h1 >${mybalance}</h1></div>
          <div className='top-image'>
            <div className='white-circle'></div>
            <div className='black-circle'></div>
          </div>
        </section>
        <section className='chart-section'>
          <h2 className='chart-heading'>Spending - Last 7 days</h2>
          <div className='graph'>
            <Graph data={data} />
          </div>
          <div className='borderdiv'>

          </div>
          <div className='bottom-layer'>
            <div className='subdiv'><p className='bottom-p'>Total this month</p>
              <h2 className='bottom-number big-font'>$442.89</h2></div>

            <div className='subdiv'><h6 className='bottom-number'>+2.4%</h6>
              <p className='bottom-p'>from last month</p>
            </div>
          </div>
        </section>

      </main>
    </div >
  );
}

export default App;
