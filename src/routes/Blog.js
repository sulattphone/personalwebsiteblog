import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class Blog extends Component {
    
    render() {
        return(
          <div id="blogPage">
            <div className="container">
              <div className="row">
                <div className="col-md-9 blog-faded-background">
                  <Link to="/blog/softwareengineeringinterviewprep">Article 1</Link>
                </div>
                <div className='col-md'>

                </div>
              </div>
            </div>
          </div>
        );
    }

}

export default Blog;