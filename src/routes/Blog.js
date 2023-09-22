import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class Blog extends Component {
    constructor(props) {
      super(props);
      /*this.scrollSmooth = this.scrollSmooth.bind(this);*/
      this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
      this.scrollToTop();
    }

    scrollToTop() {
      window.scrollTo(0, 0);
    }
    
    render() {
        return(
          <div id="blogPage">
            <div className="blog-cover-img">
              <div className="blog-cover-text-div">
                <h1 className="blog-cover-title">Su Latt's Blog</h1>
                <span className="blog-cover-subtitle">Informative articles and thought pieces I want to share with the world.</span>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-9 blog-faded-background">
                  <Link to="/blog/softwareengineeringinterviewprep">
                    <div className="card mb-3 article-card" style={{ "max-width": "100em;" }}>
                      <div className="row g-0">
                        <div className="col-md-4 article-card-img-div"></div>
                        <div className="col-md-8">
                          <div className="card-body ps-5">
                            <h5 className="card-title">Software Engineering Interview Preparation</h5>
                            <p className="card-text">
                              "Here, I'll be sharing the ins and outs of software engineering interviews, how to look for them, 
                              what to expect and how to prepare for them."
                            </p>
                            <p className="card-text">
                              <small className="text-body-secondary">7/23/2023</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md"></div>
              </div>
            </div>
          </div>
        );
    }

}

export default Blog;