import React, { Component, createContext } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AuthContext = createContext();

class App extends Component {
  render() {
    return (
      <Router>
            {/* <AuthContext.Provider value={{ basename: '/your-base-path' }}> */}

        <div>
          <Navbar />


            <Routes>
              <Route path="/" element={<News pagesize={5} country="in" category="general" />} />
              <Route path="/business" element={<News pagesize={5} country="in" category="business" />} />
              <Route path="/entertainment" element={<News pagesize={5} country="in" category="entertainment" />} />
              <Route path="/general" element={<News pagesize={5} country="in" category="general" />} />
              <Route path="/health" element={<News pagesize={5} country="in" category="health" />} />
              <Route path="/science" element={<News pagesize={5} country="in" category="science" />} />
              <Route path="/sports" element={<News pagesize={5} country="in" category="sports" />} />
              <Route path="/technology" element={<News pagesize={5} country="in" category="technology" />} />
            </Routes>

        </div>
        {/* </AuthContext.Provider> */}

        </Router>

    );
  }
}

export default App;
