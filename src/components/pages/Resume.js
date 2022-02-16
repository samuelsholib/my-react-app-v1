import React from 'react';
import '../../styles/Header.css'
import '../../styles/Navbar.css'
import '../../styles/Section.css'

import PortfolioImg from '../../images/portfolioPic.jpeg';
import PicOne from '../../images/Resume1.png';
import PicTwo from '../../images/Resume2.png';
import PdfImg from '../../images/Resume.pdf'

export default function Resume() {
  return (
    <section>
      <div>
      <header className="header">
        <h1>Welcome to my portfolio!!!</h1>
          <img className='avatar' src={PortfolioImg} alt="" />
          <img className='avatar' src="https://imgur.com/QLv0Yas" alt="" />
        </header>

        <div className='resume'>
          <h1>Resume</h1>
          <p>
            I was born and raised in Ethiopia and came to the States in 2016 at age of 22. In Ethiopia, I have gone on to earn a degree in plant science from Bahir-Dar University. Therefore, when I came to the states, I continued with my studies and got my second
            bachelor's from Washington State University in Agricultural Biotechnology And now here at the University of Washington Coding Bootcamp. However, I had never taken a coding class before. Therefore, this is my first-time learning to
            code.
          </p>

          <p> My professional career started at the Omo-Kuraz Sugar factory in Ethiopia. I begun my career there as a field coordinator but I only spent about nine months at the factory mainly because I moved to the States. Once I moved to the States,  Once I moved to the states,
            I begun my career in the service industry and moved on to become an unarmed security guard at Microsoft, Hyatt Regency Seattle, and Hertz car Rental at SeaTac airport. At the same time, I worked for Lyft as a part-time driver.
          </p>
        </div>
        
        <div>
          <p> For more information checkout my downloadable  resume here</p> <a href={PdfImg}>PDF Resume</a>

        </div>

        <footer className="footer">
        <a href="https://www.linkedin.com/in/samuel-sholib-2611271b1/">linkedin</a> || 
        <a href="https://github.com/samuelsholib">github</a> || 
        <a href='https://twitter.com/SamuelDejene4'> Twitter</a> 
        </footer>
      </div>
    </section>
  );
}
