import React from 'react'
import './Project.css'
import Banner from '../Assets/Portfolio.png'
import Banner1 from '../Assets/WeatherD.png'
import Banner2 from '../Assets/HealthCare...png'
import Banner3 from '../Assets/CurrencyC.png'

function Project() {
  return (
    <section id="project">
        <h2 className='projectTitle'>My Projects</h2>
        <span className='projectDesc'>Here are my Projects</span>

        <div className='project-item'>
        <div className='item-details'>
            <p className='P1'>Project-1</p>
            <p className='P2'>Portfolio-App: HTML, CSS, JS, React</p>
            
        </div>
        <a href='#'><img src={Banner} alt='Project-1' className='projectImg'/></a>
        </div>
          
        <div className='project-item'>
        <div className='item-details'>
            <p className='P1'>Project-2</p>
            <p className='P2'>Weather Dashboard: HTML, CSS, JS</p>
            
        </div>
        <a href='#'><img src={Banner1} alt='Project-2' className='projectImg'/></a>
        </div>

        <div className='project-item'>
        <div className='item-details'>
            <p className='P1'>Project-3</p>
            <p className='P2'>Healthcare Dashboard: HTML, CSS, JS</p>
            
        </div>
        <a href='#'><img src={Banner2} alt='Project-3' className='projectImg'/></a>
        </div>

        <div className='project-item'>
        <div className='item-details'>
            <p className='P1'>Project-4</p>
            <p className='P2'>Currency Converter: HTML, CSS, JS</p>
            
        </div>
        <a href='#'><img src={Banner3} alt='Project-1' className='projectImg'/></a>
        </div>

    </section>
  )
}

export default Project
