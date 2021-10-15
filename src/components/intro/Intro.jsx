import React from "react";
import "./intro.css";
import Me from "../../img/me.png";

import "../project/project.css";
import Work1 from "../../img/project1.png";
import Work2 from "../../img/project2.png";
import Work3 from "../../img/project3.png";
import Work4 from "../../img/project4.png";
import Work5 from "../../img/project5.gif";

import "../contact/contact.css";
import Address from "../../img/address.png";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";

const Intro = () => {
  return (
    <div className="wrapper">
      <div className="intro">
        <div className="intro__left">
          <div className="intro__left__wrapper">
            <h2 className="intro__greeting">Hello, my name is</h2>
            <h1 className="intro__name">Chiedozie Nwokocha</h1>
            <div className="intro-title">
              <div className="intro-title__wrapper">
                <div className="intro-title__item">Web Developer</div>
                <div className="intro-title__item">UI/UX Developer</div>
                <div className="intro-title__item">Mobile Developer</div>
                <div className="intro-title__item">Entrepreneur</div>
              </div>
            </div>
            <p className="intro-desc">
              I am a full-stark Web Application Developer and Software
              Developer, currently living in Abuja, Nigeria. I have a Bachelor
              of Engineering in Electronics and Computer Engineering from
              University of Port Harcourt, and my primary focus and inspiration
              is Web development. I am both driven and self-motivated, and I am
              constantly experimenting with new technologies and techniques. I
              am very passionate about Web Development, and strive to better
              myself as a developer, and the development community as a whole.
            </p>
          </div>
        </div>
        <div className="intro__right">
          <div className="intro__bg"></div>
          <img src={Me} alt="" className="intro__img" />
        </div>
      </div>
      <div className="project">
        <h3 className="project-heading">Projects:</h3>
        <div className="project__work">
          <div className="project__work__item">
            <img src={Work1} alt="Project" />
            <a href="https://waaw-tube.herokuapp.com/" className="btn-light">
              <i className="fas fa-eye"></i>Project
            </a>
            <a
              href="https://github.com/GodfreySam/waaw-reactjs-portfolio"
              className="btn-dark"
            >
              <i className="fab fa-github"></i>Github
            </a>
          </div>
          <div className="project__work__item">
            <img src={Work2} alt="Project" />
            <a href="https://61684b7b3804a31d3f39ba6e--waaw-food-tube.netlify.app/" className="btn-light">
              <i className="fas fa-eye"></i>Project
            </a>
            <a
              href="https://github.com/Chiedozie22/waaw-food-tube"
              className="btn-dark"
            >
              <i className="fab fa-github"></i>Github
            </a>
          </div>
          <div className="project__work__item">
            <img src={Work3} alt="Project" />
            <a href="https://616849cddc43761a2a382d9a--waaw-yoga-class.netlify.app/" className="btn-light">
              <i className="fas fa-eye"></i>Project
            </a>
            <a
              href="https://github.com/Chiedozie22/yoga-class"
              className="btn-dark"
            >
              <i className="fab fa-github"></i>Github
            </a>
          </div>
          <div className="project__work__item">
            <img src={Work4} alt="Project" />

            <a
              href="https://waaw-tube.herokuapp.com/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i>Project
            </a>
            <a
              href="https://github.com/Chiedozie22/waaw-tube"
              className="btn-dark"
            >
              <i className="fab fa-github"></i>Github
            </a>
          </div>
          <div className="project__work__item">
            <img src={Work5} alt="Project" />
            <a href="https://github.com/Chiedozie22/react-tic-tac-toe" className="btn-light">
              <i className="fas fa-eye"></i>Project
            </a>
            <a href="https://github.com/Chiedozie22/react-tic-tac-toe" className="btn-dark">
              <i className="fab fa-github"></i>Github
            </a>
          </div>
          
          
        </div>
      </div>
      <div className="contact">
        <div className="contact__left">
          <ul className="contact__info">
            <li className="contact__info__item">
              <img src={Address} alt="address" />
              <span>Abuja, Nigeria</span>
            </li>
            <li className="contact__info__item">
              <img src={Email} alt="email" />
              <span>
                <a href="ceejaydonkruz@gmail.com">ceejaydonkruz@gmail.com</a>
              </span>
            </li>
            <li className="contact__info__item">
              <img src={Phone} alt="phone" />
              <span>
                <a href="tel:+2348134111703">+2348134111703</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="contact__right">
          <div className="contact-heading">
            <h1>Wanna Chat?</h1>
          </div>
          <form
            className="contact-form"
            action="/contact"
            method="POST"
            autocomplete="off"
            id="contact-form"
          >
            <div className="contact-form__item">
              <label>Name</label>
              <input className="" type="text" required name="name" />
            </div>
            <div className="contact-form__item">
              <label>Email</label>
              <input className="" type="email" required name="email" />
            </div>
            <div className="contact-form__item">
              <label>Message</label>
              <textarea
                id="email-body"
                rows="5"
                cols="50"
                placeholder="write a messge..."
                required
                name="message"
              ></textarea>
            </div>
            <div className="contact-form__item">
              <div
                className="g-recaptcha"
                data-sitekey="6Ldj2lsbAAAAAD5NXrObnRX3ElSvKiDtq15skBvx"
              ></div>
            </div>
            <button type="submit" className="">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Intro;
