import React from 'react'
import "../Css/about.css"

import profile from "../images/profile.jpg"
import profile2 from "../images/profile2.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import cover from "../images/cover.png"
import c from "../images/c++.png"
import css from "../images/css.png"
import html from "../images/html.png"
import java from "../images/java.png"
import js from "../images/js.png"
import mysql from "../images/mysql.png"
import github from "../images/github.png"
import php from "../images/php.png"
import react from "../images/react.png"
import python from "../images/python.png"
import illustration1 from "../images/illustration1.png"
import illustration2 from "../images/illustration2.png"

const About = () => {


  return (

    <>
      {/* Introduction Part */}
      <div className='intro-container'>
        <div className='intro-left-container'>
          <div className='image'>
            <img src={profile} />

          </div>
          <div className='description'>
            <p className='greetings'>HELLO, I'M SAMRAT</p>
            <p className='desc'>I am a versatile developer who can develope projects from concepts to implementation</p>
          </div>
          <div className='social'>
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
            <img src={linkedin} />

          </div>

        </div>
        <div className='intro-right-container'>
          <div className='intro-headiing'>
            Introduction
          </div>
          <div className='intro-desc'>
            A highly motivated and results-oriented IT professional with a passion for leveraging technology to solve complex problems and organizational success. Possessing a strong foundation in Object Oriented Programming, Data Structure, Networking, I bring a passion for problem-solving and a dedication to delivering innovative solutions that optimize efficiency and achieve strategic objectives.  I am eager to contribute my skills and expertise to a challenging and rewarding environment where I can continue to learn and grow.
          </div>
          <button>CONTACT ME</button>

        </div>

      </div>

      <hr />

      {/* About Me Part */}
      <div className='about-container'>
        <h1>DETAILS</h1>

        <div className='details'>


          <div class="card">
            <img src={cover} alt="Your Name" class="card-image" />
            <div class="card-content">
              <img src={profile} alt="Your Logo" class="card-logo" />
              <p class="card-title">Samrat Kumar</p>
              <p class="card-subtitle">Father's Name - Sudipta Kumar</p>
              <p class="card-subtitle">Location - Howrah, West Bengal</p>
              <div class="card-contact">
                <p>Email - <a href="mailto:samratkumar2001@gmail.com">samratkumar2001@gmail.com</a></p>
                <p>Linked In - <a href="https://www.linkedin.com/in/samrat-kumar-12205229a">linkedin/samrat-kumar</a></p>
                <p>GitHub - <a href="https://github.com/samratkumar2001">github.com/samrat-kumar</a></p>
              </div>
            </div>
          </div>

        </div>
        </div>
        <hr/>

      {/* Education Section */}


      <div className='education-container'>
        <h1>EDUCATION</h1>
        <ul className='education'>
          <li className='first-li'>
            <div className="date first">2018</div>
            <div className="title">Secondary (79.8%) WBBSE</div>
            <div className="descr">Uttarpara Model School (H.S.)</div>
          </li>
          <li className='second-li' >
            <div className="date second">2020</div>
            <div className="title">Higher Secondary (82.4%) WBCHSE</div>
            <div className="descr">Uttarpara Model School (H.S.)</div>
          </li>
          <li className='third-li' >
            <div className="date third">2023</div>
            <div className="title">BCA (CGPA - 9.3) MAKAUT</div>
            <div className="descr">Techno Main Salt Lake</div>
          </li>
          <li className='fourth-li' >
            <div className="date fourth">2025</div>
            <div className="title">MCA (CGPA - 8.37) MAKAUT</div>
            <div className="descr">Techno College Hooghly</div>
          </li>
        </ul>
      </div>


<hr/>

      {/* Skills Section */}
      <h1 style={{marginTop: '5rem', textAlign:'center'}}>Technical Skills</h1>
      <div className='skills-container'>
        
        <div className='skill-left'>
          <div className='skill-container'>
            <img src={c} />
            <p>C++</p>
          </div>
          <div className='skill-container'>
            <img src={css} />
            <p>CSS</p>
          </div>
          <div className='skill-container'>
            <img src={html} />
            <p>HTML</p>
          </div>
          <div className='skill-container'>
            <img src={java} />
            <p>Java</p>
          </div>
          <div className='skill-container'>
            <img src={mysql} />
            <p>MySQL</p>
          </div>
          <div className='skill-container'>
            <img src={js} />
            <p>JavaScript</p>
          </div>
          <div className='skill-container'>
            <img src={github} />
            <p>GitHub</p>
          </div>
          <div className='skill-container'>
            <img src={react} />
            <p>React JS</p>
          </div>
          <div className='skill-container'>
            <img src={php} />
            <p>PHP</p>
          </div>
          <div className='skill-container'>
            <img src={python} />
            <p>Python</p>
          </div>

        </div>
        <div className='skill-right'>
          <img src={illustration1} />


        </div>
      </div>

      <hr/>






      {/* Soft Skill Part */}
      <div className='softskill-container'>


        <blockquote class="electric bubble">
          <p>Team-Work,</p>
          <p>Multitasking,</p>
          <p>Adapting</p>
        </blockquote>

        <div className='softskill-image-container'>
          <img src={illustration2} />
        </div>

        <blockquote class="speech bubble">
          <p>Flexible,</p>
          <p>Attention to Detail</p>
        </blockquote>

      </div>







      

    







      













      
    </>
  )
}

export default About