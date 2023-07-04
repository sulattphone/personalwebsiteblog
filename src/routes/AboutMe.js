import React, { Component } from 'react';
import FlipCard from '../components/FlipCard';
import AchievementsList from '../json/achievements.json';
import SchoolsInfo from '../json/schoolInfo.json';
import '../index.css';

class AboutMe extends Component {

  setSchoolSphereActive = (id, infoId) => {
    var school0 = document.getElementById("schoolZero");
    var school1 = document.getElementById("schoolOne");
    var school2 = document.getElementById("schoolTwo");
    var school3 = document.getElementById("schoolThree");

    school0.classList.remove("active-school");
    school1.classList.remove("active-school");
    school2.classList.remove("active-school");
    school3.classList.remove("active-school");


    var element = document.getElementById(id);
    element.classList.add("active-school");

    var schoolInfo0 = document.getElementById("schoolInfoBerkeley");
    var schoolInfo1 = document.getElementById("schoolInfoCSM");
    var schoolInfo2 = document.getElementById("schoolInfoHorizon");
    var schoolInfo3 = document.getElementById("schoolInfoBEPPS");

    schoolInfo0.classList.add("display-none");
    schoolInfo1.classList.add("display-none");
    schoolInfo2.classList.add("display-none");
    schoolInfo3.classList.add("display-none");

    var infoElement = document.getElementById(infoId);
    infoElement.classList.remove("display-none");
  }

  aboutSideInfo = () => {
    return(
      <div className="about-side-info-div">
        <div className="about-side-img-div"></div>
        <hr className="site-black-hr" />
        <div className="about-side-text-div">
          <p className="about-side-text">
            <ul className="about-side-ul" id="ulNoPadding">
              <li>Su Latt Phone<br /></li>
              <li>Age {new Date().getFullYear() - 1999}<br /></li>
              <li>Female (She/Her)<br /></li>
              <li>Software Engineer at Guidewire Software, Inc.<br /></li>
              <li>UC Berkeley, College of San Mateo, Horizon International School<br /></li>
              <li>Full-Stack Web Development, iOS Development, Anime, Dancing</li>
            </ul>
          </p>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div>
        <div className="container container-top-padding">
          <div className="row">
            <div className="col-lg-9">
              <div className="about-main-content-div">
                <div className="about-main-img-div"></div>
                  <div className="about-main-intro-div">
                    <p className="about-main-intro-text">
                      <br />Hello, I'm Su Latt.  I was born and raised in Yangon, Myanmar.  My educational journey began with Myanmar government school No.(3) B.E.P.P.S Bahan until the 7th grade.
                      Afterwards, I transferred to Horizon International School where I went on to complete my high school diploma with IGCSE O'Level.  
                      <br />
                      <br />While debating where and how to continue with my higher education, I took the GAC program at Crown Education institution.  After this, as I turn 18, my goals became 
                      clearer and I felt more than ready to go study abroad.  I decided to opt for a Computer Science degree at College of San Mateo in California, with the goal of transferring 
                      to UC Berkeley for the Bachelor's Science there, which I was able to acheive.  I graduated from UC Berkeley in May 2021 with a Bachelor's Science degree in 
                      Electrical Engineering and Computer Science (EECS).  
                      <br />
                      <br />In my junior year, I obtained a Software Engineering internship position at Guidewire Software, Inc.  It was a challenging yet rewarding experience, navigating 
                      through workplace practices, new technologies, and working from home amidst the Covid-19 pandemic.  All ends well in the end, as I now have graduated and have secured 
                      a full-time Software Engineer position at Guidewire.  I have been part of our Integration Framework team ever since, working on integrations that enable our customers 
                      to have seamless tailored experience with our services.
                    </p>
                  </div>
                  <br />
                  <div className="about-main-edu-div">
                    <h3 className="about-main-edu-header">
                      Education Path
                    </h3>
                    <br />
                    <div className="row">
                      {SchoolsInfo["schools"].map(school => {
                        return(
                          <div className="col-lg-3">
                            <div className="about-main-edu-school 
                                            d-flex justify-content-center 
                                            align-items-center 
                                            sphere-berkeley
                                            active-school"
                                  id={school["schoolId"]}
                                  onClick={()=>this.setSchoolSphereActive(school["schoolId"],school["schoolInfoId"])}>
                              {school["name"]}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="row">
                      <div className="col-lg-3" id="schoolIndicatorCol0" />
                      <div className="col-lg-3" id="schoolIndicatorCol1" />
                      <div className="col-lg-3" id="schoolIndicatorCol2" />
                      <div className="col-lg-3" id="schoolIndicatorCol3" />
                    </div>
                    <div className="school-info-div">
                      <span id="schoolInfoBerkeley">
                            {SchoolsInfo["schools"][0].description}
                            <br />{SchoolsInfo["schools"][0].courses && <strong>Relevant Courses:</strong> }
                            <ul>
                              {SchoolsInfo["schools"][0].courses && SchoolsInfo["schools"][0].courses.map(course => {
                                return(<li>{course}</li>);
                              })}
                            </ul>
                      </span>
                      <span className="display-none" id="schoolInfoCSM">
                            {SchoolsInfo["schools"][1].description}
                            <br />{SchoolsInfo["schools"][1].courses && <strong>Relevant Courses:</strong> }
                            <ul>
                              {SchoolsInfo["schools"][1].courses && SchoolsInfo["schools"][1].courses.map(course => {
                                return(<li>{course}</li>);
                              })}
                            </ul>
                      </span>
                      <span className="display-none" id="schoolInfoHorizon">
                            {SchoolsInfo["schools"][2].description}
                            <br />{SchoolsInfo["schools"][2].courses && <strong>Relevant Courses:</strong> }
                            <ul>
                              {SchoolsInfo["schools"][2].courses && SchoolsInfo["schools"][2].courses.map(course => {
                                return(<li>{course}</li>);
                              })}
                            </ul>
                      </span>
                      <span className="display-none" id="schoolInfoBEPPS">
                            {SchoolsInfo["schools"][3].description}
                            <br />{SchoolsInfo["schools"][3].courses && <strong>Relevant Courses:</strong> }
                            <ul>
                              {SchoolsInfo["schools"][3].courses && SchoolsInfo["schools"][3].courses.map(course => {
                                return(<li>{course}</li>);
                              })}
                            </ul>
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="about-main-achievement-div">
                    <h3>
                      Activities & Acheivements
                    </h3>
                    <div className="achievements-div">
                      <div className="row row-fix justify-content-center">
                        {AchievementsList["achievements"].map(a => {
                          return(
                            <div className="col-md-4">
                              <FlipCard
                                title={a.title}
                                description={a.description}
                                height="15rem"
                                frontBgColor="#FEEC79" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                {this.aboutSideInfo()}
              </div>
            </div>
        </div>
    </div>
    );
  }
}

export default AboutMe;