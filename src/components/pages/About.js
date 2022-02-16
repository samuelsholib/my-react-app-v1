import React from 'react';
import '../../styles/Header.css'
import '../../styles/Navbar.css'
import '../../styles/Section.css'
import PortfolioImg from '../../images/portfolioPic.jpeg'

export default function AboutMe() {
  return (
    <React.Fragment>

      <header className="header">
        <h1>Welcome to my portfolio!!!</h1>
        </header>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>About Me</h1>
            <div className='card'>
            <img className='avatar' src={PortfolioImg} alt="" />
              <div className='card-body'>
                <div className="row abstract-back ">
                  
                </div>
              </div>

              <div className='card-body'>
                <p className='about'>
                  I am Samuel Sholib, a Full Stack Web Developer with a demonstrated knowledge of working on web production and command line applications. Have great
                  understanding and technical knowledge in Javascript, ReactJS, NodeJS, ExpressJS, MySQL,
                  MongoDB, HTML, CSS, Handlebars, Bootstrap, Matrialize, Bulma and other technologies.
                </p>
              </div>

              <div className="modal-footer" />

              <div className='card-body'>
                <h2 className='edu'>Education</h2>
                <br />

                <div className="grid-item">
                  <a href='https://www.washington.edu/' target='_blank'><img className='university-logo' src="https://upload.wikimedia.org/wikipedia/commons/3/36/University_of_Washington_Block_W_logo_RGB_brand_colors.SVG" alt="" /></a>
                </div>
                <div className='grid-container-profile'>
                  <div className='grid-item'>
                    <div className='title-uni'>University Of Washington</div>
                    <div className='title-concentration'>Full Stack Web Development</div>
                  </div>

                  <div className="grid-item">
                    <a href='https://wsu.edu/' target='_blank'><img className='university-logo' src="https://wsucougars.com/images/2015/8/26/RBITBHNHTTJASLB.20150826224203.png" alt="" /></a>
                  
                    <div className='title-uni'>Washington State University</div>
                    <div className='title-concentration'>Bachelors of Science in Agricultural Biotechnology</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/samuel-sholib-2611271b1/">linkedin</a> || 
        <a href="https://github.com/samuelsholib">github</a> || 
        <a href='https://twitter.com/SamuelDejene4'> Twitter</a> 
        </footer>
    </React.Fragment>
  );
};