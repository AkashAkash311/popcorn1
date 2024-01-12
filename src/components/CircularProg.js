import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const CircularProg = ({percentage}) => {

  

  return (
    <div>
      <CircularProgressbar value={Math.round(percentage*10)}  text={`${Math.round(percentage)}`} 
      styles={buildStyles({
        
        rotation: 0.25,
    
        strokeLinecap: 'butt',
    
        textSize: '48px',
    
        pathTransitionDuration: 0.5,

        pathColor: `rgba(255, 0, 0, ${percentage / 100})`,
        textColor: 'white',
        trailColor: 'orange',
        backgroundColor: '#3e98c7',
      })}/>
    </div>
  )
}

export default CircularProg