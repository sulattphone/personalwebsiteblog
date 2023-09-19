import React, { Component } from 'react';
import { BrowserRouter,  Route, Routes, HashRouter } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './routes/Home';
import AboutMe from './routes/AboutMe';
import Blog from './routes/Blog';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SoftwareEngineeringInterview from './routes/articles/SoftwareEngineeringInterview';

class App extends Component {
    render() {
        return(
            <HashRouter>
              <Logo />
              <Navigation />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutMe /> } />
                <Route path='/blog' element={<Blog /> } />

                {/* Articles Routes */}
                <Route path='/blog/softwareengineeringinterviewprep' element={<SoftwareEngineeringInterview />} />
              </Routes>
            </HashRouter>
        );
        
    }
}


export default App;