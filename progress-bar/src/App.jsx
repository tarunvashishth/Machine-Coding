import { useState } from 'react'
import './App.css'

function App() {
  const [percentage, setPercentage] = useState(50)

  const progress_style={
    transform : `translateX(${percentage - 100}%)`,
  }

  return (
    <>
      <h1>Progress Bar</h1>
      <div className='progress-bar'>
        <div className='progress' style={progress_style}>
          <div className='progress-digits'>{percentage}%</div>
        </div>
      </div>
      <button onClick={() => setPercentage(prev => prev > 0 ? prev - 10 : prev)}>-10%</button>
      <button onClick={() => setPercentage(prev => prev < 100 ? prev + 10 : prev)}>+10%</button>
    </>
  )
}

export default App
