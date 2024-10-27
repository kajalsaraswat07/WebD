import React from 'react'
import './Intro.css'
import Hire from '../Assets/hireme.png'
import reactLogo from '../Assets/computer.png'
import { Link } from 'react-scroll'
function Intro() {
  return (
    <section id = "intro">
        <div className='introContent'>
            <span className='hello'> Hello,</span>
            <span className='introText'> I'm <span className="introName">Kajal</span>  
            <br/>
            Web Developer 
            </span>
            <p className='introPara'> "With a passion for clean design and efficient code,
            <br/> I bring creativity and technical expertise together to
            <br/> build engaging digital experiences."
            </p>
            <Link to =""> 
            <button className='btn2'>
                <img src ={Hire} alt='Img' className='btnImg2'></img>
                Hire Me
            </button>
            </Link>
        </div>

    <img src={reactLogo} alt='React Logo ' className='logo2'></img>  
    </section>
  )
  
}

export default Intro
