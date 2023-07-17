import React, { Component } from 'react';
import '../../index.css';
import content from '../../json/articleContents/softwareEngineeringInterviewContent.json';

class SoftwareEngineeringInterview extends Component {
    
  render() {
    return(
      <div id="">
        <div className="container articles-container">
          <h1 className="article-title">{content.title}</h1>
          <p>{content.body.intro1}</p>
          <p>{content.body.intro2}</p>
          <p>{content.body.introBulletsIntro}</p>
          <ul>
              <li>{content.body.introBullet1}</li>
              <li>{content.body.introBullet2}</li>
              <li>{content.body.introBullet3}</li>
              <li>{content.body.introBullet4}</li>
          </ul>

          <h3>{content.body.resumeBuildingSubtitle}</h3>
          <p>{content.body.resumeBuilding1}</p>
          <p>{content.body.resumeBuilding2}</p>
          <p>{content.body.resumeBuilding3}</p>
          <p>{content.body.resumeBuildingBulletsIntro}</p>
          <ul>
              <li>{content.body.resumeBuildingBullet1}</li>
              <li>{content.body.resumeBuildingBullet2}</li>
              <li>{content.body.resumeBuildingBullet3}</li>
              <li>{content.body.resumeBuildingBullet4}</li>
              <li>{content.body.resumeBuildingBullet5}</li>
              <li>{content.body.resumeBuildingBullet6}</li>
          </ul>
          <p>{content.body.resumeBuilding4}</p>
          <p>{content.body.resumeBuilding5}</p>
          <p>{content.body.resumeBuilding6}</p>
          <p>{content.body.resumeBuilding7}</p>
          <p>{content.body.resumeBuilding8}</p>

          <h3>{content.body.codingQuestionsSubtitle}</h3>
          <p>{content.body.codingQuestions1}</p>
          <p>{content.body.codingQuestionsBullets1Intro}</p>
          <ul>
              <li>{content.body.codingQuestionsBullet11}</li>
              <li>{content.body.codingQuestionsBullet12}</li>
              <li>{content.body.codingQuestionsBullet13}</li>
              <li>{content.body.codingQuestionsBullet14}</li>
              <li>{content.body.codingQuestionsBullet15}</li>
              <li>{content.body.codingQuestionsBullet16}</li>
              <li>{content.body.codingQuestionsBullet17}</li>
          </ul>
          <p>{content.body.codingQuestions2}</p>
          <p>{content.body.codingQuestions3}</p>
          <ul>
              <li>{content.body.codingQuestionsBullet21}</li>
              <li>{content.body.codingQuestionsBullet22}</li>
              <li>{content.body.codingQuestionsBullet23}</li>
          </ul>

          <h3>{content.body.interviewSubtitle}</h3>
          <p>{content.body.interviewBullets1Intro}</p>
          <ul>
            <li>
              {content.body.interviewBullet1a}
              <ul>
                  <li>{content.body.interviewBullet1ai}</li>
                  <li>{content.body.interviewBullet1aii}</li>
                  <li>{content.body.interviewBullet1aiii}</li>
              </ul>
            </li>
            <li>{content.body.interviewBullet1b}</li>
          </ul>
          <p>{content.body.interview1}</p>
          <p>{content.body.interview2}</p>
          <p>{content.body.interview3}</p>
          <p>{content.body.interview4}</p>
          <p>{content.body.interview5}</p>
          <p>{content.body.interview6}</p>
          <div class="callout">{content.body.interviewHighlight1}</div>
          <div class="callout">{content.body.interviewHighlight2}</div>
          <div class="callout">{content.body.interviewHighlight3}</div>
          <p>{content.body.interview7}</p>
          <ul>
            <li>{content.body.interviewBullet21}</li>
            <li>{content.body.interviewBullet22}</li>
            <li>{content.body.interviewBullet23}</li>
            <li>{content.body.interviewBullet24}</li>
            <li>{content.body.interviewBullet25}</li>
          </ul>
          <p>{content.body.interview8}</p>

          <h3>{content.body.jobSubtitle}</h3>
          <p>{content.body.job1}</p>
          <p>{content.body.job2}</p>
          <p>{content.body.jobBulletsIntro}</p>
          <ul>
            <li>{content.body.jobBullet1}</li>
            <li>{content.body.jobBullet2}</li>
            <li>{content.body.jobBullet3}</li>
            <li>{content.body.jobBullet4}</li>
          </ul>
          <p>{content.body.job3}</p>
          <p>{content.body.job4}</p>
          <p>{content.body.job5}</p>
          <p>{content.body.job6}</p>

          <p>{content.conclusion}</p>

        </div>
      </div>
    );
  }

}

export default SoftwareEngineeringInterview;