import React from 'react';
import '../../styles/Header.css'
import '../../styles/Navbar.css'
import '../../styles/Section.css'
import PortfolioImg from '../../images/portfolioPic.jpeg';

export default function Contact() {
  return (
    <React.Fragment>

      <header className="header">
        <h1>Welcome to my portfolio!!!</h1>
      </header>
      <div className='container'>

        <div className='col'>
          <h1>Contact</h1>
          <div className='card'>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/samuel-sholib-2611271b1/">linkedin</a> ||
        <a href="https://github.com/samuelsholib">github</a> ||
        <a href='https://twitter.com/SamuelDejene4'> Twitter</a>
      </footer>
    </React.Fragment >
  )
};