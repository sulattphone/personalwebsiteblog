import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import myPic from '../images/my-pic.jpeg';
import carouselMeImg from '../images/home-carousel-me.jpg';
import carouselExperienceImg from '../images/home-carousel-experience.jpg';
import carouselProjectsImg from '../images/home-carousel-projects.jpg';
import carouselBlogImg from '../images/home-carousel-blog.jpg';

class Home extends Component {
  render() {
    return(
      <div className="page">
        <div id="homePage">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-img-div"></div>
                  <div className="carousel-caption d-none d-md-block">
                    <img src={myPic} className="d-block home-page-img" alt="..." />
                    <h4 className="title home-carousel-title">Su Latt Phone</h4>
                    <div className="carousel-subTitle-div">
                      <p>Hi I'm Su Latt. Welcome! Whoever you are, I hope you get something out of visiting my website!</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-img-div"></div>
                  <div className="carousel-caption d-none d-md-block">
                    <Link to="/about">
                      <img src={carouselMeImg} className="d-block home-page-img" alt="..." />
                    </Link>
                    <Link to="/about" className="link home-carousel-link">
                      <h4 className="title home-carousel-title">About Me</h4>
                    </Link>
                    <div className="carousel-subTitle-div">
                      <p>Read about me! What I'm like as a software engineer, as a student, as a woman, and as a person.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-img-div"></div>
                  <div className="carousel-caption d-none d-md-block">
                    <Link to="/experiences">
                      <img src={carouselExperienceImg} className="d-block home-page-img" alt="..." />
                    </Link>
                    <Link to="/experiences" className="link home-carousel-link">
                      <h4 className="title home-carousel-title">Experience</h4>
                    </Link>
                    <div className="carousel-subTitle-div">
                      <p>Come learn about my work experiences so far! Ranging from part-time jobs to internships.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-img-div"></div>
                  <div className="carousel-caption d-none d-md-block">
                    <Link to="/projects">
                      <img src={carouselProjectsImg} className="d-block home-page-img" alt="..." />
                    </Link>
                    <Link to="/projects" className="link home-carousel-link">
                      <h4 className="title home-carousel-title">Personal Projects</h4>
                    </Link>
                    <div className="carousel-subTitle-div">
                      <p>Here I present details about some of the personal projects I've done. Mostly technical, but others too!</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-img-div"></div>
                  <div className="carousel-caption d-none d-md-block">
                    <Link to="/blog">
                      <img src={carouselBlogImg} className="d-block home-page-img" alt="..." />
                    </Link>
                    <Link to="/experiences" className="link home-carousel-link">
                      <h4 className="title home-carousel-title">Blog</h4>
                    </Link>
                    <div className="carousel-subTitle-div">
                      <p>Just a safe space to express myself. Hope it's thought-provoking and entertaining for you!</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>             
        </div>
        <div className="card-img-overlay" id="darkOverlay"></div>
      </div>
    );
  }
}

export default Home;