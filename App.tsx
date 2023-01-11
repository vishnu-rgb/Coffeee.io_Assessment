import * as React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('Overview');
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand>Create Workorder</Navbar.Brand>

          <div className="btn-nav">
            <button href="#">save</button>
          </div>
          {/* <h4>Overview</h4>
          <h4>Other</h4> */}
          <td className="tabs">
            <button onClick={() => setActiveTab('Overview')}>Overview</button>
            <button onClick={() => setActiveTab('Other')}>Other</button>
          </td>
          <div className="content">
            {activeTab === 'Overview' ? (
              <div>{/* Overview tab content goes here */}</div>
            ) : (
              <div>
                {/* Other tab content goes here */}
                <p>Hello World!</p>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </Container>
  );
}

export default App;
