import React from 'react';
import '../../styles/Header.css'
import '../../styles/Navbar.css'
import '../../styles/Section.css'

import PortfolioImg from '../../images/portfolioPic.jpeg'
import pwsImg from '../../images/psw.png'
import wdsImg from '../../images/wds.png'
import wthrImg from '../../images/wthr.png'
import blogImg from '../../images/blog.png'
import quizImg from '../../images/quiz.png'
import musicImg from '../../images/music.png'
import drinksImg from '../../images/drinks.png'



export default function Portfolio() {
  return (
    <React.Fragment>

      <header className="header">
        <h1>Welcome to my portfolio!!!</h1>
        </header>
      <section>

        <div className='container'>
          <div className='row'>
            <h1>Portfolio</h1>
            <div className='col'>
              <div className='card'>
                <div className='psw-pic'>
                  <h3>password generator</h3>
                  <img src={pwsImg} alt="" />

                  <p> An app built to generate a robust password to customers who struggle to come up with strong password for themselves.</p>

                  <a href="https://samuelsholib.github.io/strong-key-to-go/">Click here</a> <p>To see the app live</p>
                  <a href="https://github.com/samuelsholib/strong-key-to-go">Click here</a> <p>To go to the github repo</p>

                </div>

                <div className='psw-pic'>
                  <h3>Work Day scheduler</h3>
                  <img src={wdsImg} alt="" />

                  <p> An app built to help a busy client by simplifing his/her work into hours. Therefore, he/she knows what to do in every hours of each day</p>

                  <a href="https://samuelsholib.github.io/work-day-scheduler/">Click here</a> <p>To see the app live</p>
                  <a href="https://github.com/samuelsholib/work-day-scheduler">Click here</a> <p>To go to the github repo</p>

                </div>
                <div>
                  <h3>Weather App</h3>
                  <img src={wthrImg} alt="" />
                  <p>An app built to present users with current and future weather conditions of citys they want travel or move in. </p>
                  <p>Everytime a user search for a city, the user will be presented with the citys name, the date, an icon representation of weather conditions such as; the temperature, the humidity, the wind speed, and the UV index of that city.
                  </p>
                  <a href="https://samuelsholib.github.io/weather-dashboard/">click here</a>
                  <p>To see the app live</p>
                  <a href="https://github.com/samuelsholib/weather-dashboard">Click here</a>
                  <p>To go to the github github repo</p>

                  <div className='psw-pic'>
                    <h3>Tech-Blog</h3>
                    <img src={blogImg} alt="" />
                    <p>Tech Blog is a blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ post. </p>
                    <a href="https://come-blog.herokuapp.com/">Click here</a> <p>To see the app live</p>
                    <a href="https://github.com/samuelsholib/tech-blog">Click here</a> <p>To go to the github repo</p>
                  </div>

                  <div className='psw-pic'>
                    <h3>Coding Quiz</h3>
                    <img src={quizImg} alt="" />
                    <p> An app built to test programming knowledge of coding students.</p>
                    <a href="https://samuelsholib.github.io/coding-quiz/">Click here</a> <p>To see the app live</p>
                    <a href="https://github.com/samuelsholib/coding-quiz">Click here</a> <p>To go to the github repo</p>
                  </div>

                  <div className='psw-pic'>
                    <h3>Melody Medley</h3>
                    <img src={musicImg} alt="" />
                    <p>Melody-Medley is a music app built using both front-end and back-end languages. Once you are in Melody-Medley, you will find your favorite songs just by searching either song title or artist’s name. Also, the app offers variety of features
                      such as adding a playlist, adding your favorite music into your existing playlist, remove music from your playlist etc...
                    </p>
                    <a href="https://project2-full-stack-app.herokuapp.com/">Click here</a> <p>To see the app live</p>
                    <a href="https://github.com/jcnolan9/Project2_FullStackApp">Click here</a> <p>To go to the github repo</p>
                  </div>

                  <div className='psw-pic'>
                    <h3> Movie and Cocktail</h3>
                    <img src={drinksImg} alt="" />
                    <p> An app Built to return a drink recommendation that goes with the users movie selection.</p>
                    <a href="https://samuelsholib.github.io/project-one/">Click here</a> <p>To see the app live</p>
                    <a href="https://github.com/samuelsholib/project-one">Click here</a> <p>To go to the github repo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/samuel-sholib-2611271b1/">linkedin</a> ||
        <a href="https://github.com/samuelsholib">github</a> ||
        <a href='https://twitter.com/SamuelDejene4'> Twitter</a>
      </footer>
    </React.Fragment >
  );
}