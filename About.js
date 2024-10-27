import React from 'react'
import'./About.css'
import Html from '../Assets/HTML5_Badge.svg'
import Css from '../Assets/css-3.svg'
import Bootstrap from '../Assets/bootstrap.png'
import Javascript from '../Assets/javascript.svg'
import react from '../Assets/react.svg'
function about() {
  return (
      <section id="about">
        <span className="aboutTitle">What I Know</span>
        <br/>
        <span className="aboutDesc">Hello Everyone 
         <br/>I am passionate about crafting engaging and responsive 
         <br/>websites.With a solid foundation in HTML, CSS, and 
         <br/>JavaScript, I specialize in creating visually appealing
         <br/> and functional web applications. My expertise in React 
         <br/>allows me to build dynamic and interactive user interfaces,
         <br/> while my understanding of web development principles 
         <br/>ensures that every project is both user-friendly and efficient.
         </span>

         <div className='aboutBars'>
          <    div className='aboutBar'>
            <img src = {Html} alt = "" className='aboutBarImg'/>
             <div className='aboutBarText'>
                 <h2>HTML</h2>  
                 <p>HyperText Markup Language</p>  
            </div> 
         </div>

         </div>

         <div className='aboutBars'>
          <    div className='aboutBar'>
            <img src = {Css} alt = "" className='aboutBarImg'/>
             <div className='aboutBarText'>
                 <h2>CSS</h2>  
                 <p>Cascading Style Sheet</p>  
            </div> 
         </div>

         </div>

         <div className='aboutBars'>
          <    div className='aboutBar'>
            <img src = {Bootstrap} alt = "" className='aboutBarImg'/>
             <div className='aboutBarText'>
                 <h2>Bootstrap</h2>  
                 <p>Bootstrap is a powerful, feature-packed frontend toolkit.</p>  
            </div> 
         </div>

         </div>

         <div className='aboutBars'>
          <    div className='aboutBar'>
            <img src = {Javascript} alt = "" className='aboutBarImg'/>
             <div className='aboutBarText'>
                 <h2>JS</h2>  
                 <p>JavaScript is a lightweight interpreted  programming language with first-class functions. </p>  
            </div> 
         </div>

         </div>

         <div className='aboutBars'>
          <    div className='aboutBar'>
            <img src = {react} alt = "" className='aboutBarImg'/>
             <div className='aboutBarText'>
                 <h2>React</h2>  
                 <p>The library for web and native user interfaces. </p>  
            </div> 
         </div>

         </div>

        
      </section>
  )
}

export default about
