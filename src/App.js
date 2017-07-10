import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { Button, ButtonGroup, MenuItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './App.css';
import './Modal.js';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header row justify-content-between align-items-center">
          <h2>F<FontAwesome
            name='cog'
            className='fa-1x'
            spin
          />nt Awes<FontAwesome
            name='cog'
            className='fa-1x'
            spin
          />me</h2>
          <h1> Sauce B<FontAwesome
            name='cog'
            className='fa-1x'
            spin
          />x</h1>
      </div>
      <p className="App-intro row ml-3 mt-3">
        Consider buttons like these
      </p>

      <p className="row ml-3 justify-content-between">
        <ButtonGroup justified>
          <Button
            name='button'
            className="btn-secondary btn-danger"
          >Close <span className="fa-stack">
            <FontAwesome
              name='square'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
              color='white'
            />
            <FontAwesome
              name='window-close'
              className='fa-stack-1x text-danger'
              size='1x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
            />
          </span>
          </Button>
          <Button
            name='button'
            className="btn-secondary btn-info"
          >I/O <span className="fa-stack">
            <FontAwesome
              name='comment'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='microchip'
              className='fa-stack-1x text-info'
              size='1x'
              style={{  }}
            />
          </span>
          </Button>
          <Button
            name='button'
            className="btn-secondary btn-warning"
          >Rate <span className="fa-stack">
            <FontAwesome
              name='star'
              className='fa-stack-2x'
              size='2x'
              style={{
                textShadow: '0 3px 0 rgba(255, 0, 0, 1)',
                textShadow: '3px 0 0 rgba(255, 0, 0, 1)',
                textShadow: '0 0 3px rgba(255, 0, 0, 1)'
                  }}
            />
            <FontAwesome
              name='star-o'
              className='fa-stack-1x text-warning'
              size='1x'
              style={{
                textShadow: '0 3px 0 rgba(255, 0, 0, 1)',
                textShadow: '3px 0 0 rgba(255, 0, 0, 1)',
                textShadow: '0 0 3px rgba(255, 0, 0, 1)'
                  }}
            />
          </span>
          </Button>
          <Button
            name='button'
            className="btn-secondary btn-success"
          >Spend <span className="fa-stack">
            <FontAwesome
              name='circle'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='money'
              className='fa-stack-1x text-success'
              size='1x'
              style={{  }}
            />
          </span>
          </Button>
          <Button
            name='button'
            className="btn-secondary"
            >Edit<span className="fa-stack">
            <FontAwesome
              name='cloud'
              className='fa-stack-2x fa-flip-vertical'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='terminal'
              className='fa-stack-1x'
              size='1x'
              style={{ color: 'gold' }}
            />
          </span>
        </Button>
        </ButtonGroup>
      </p>
      <p className="App-intro mt-3">
        Now consider using them on your own site!
      </p>
      <h2>Coming Soon...
      </h2>
      <h1>The Font Awesome Sauce Box
      </h1>
      <span className="row justify-content-around">
        <Button
          className="btn btn-lg mono modal-container"
        >Learn More
        </Button>

      </span>
      <p className="row justify-content-around mt-4">
        <Button className="btn btn-secondary btn-lg" to="/">Home</Button>
        <Button className="btn btn-secondary btn-lg" to="/about">About</Button>
        <Button className="btn btn-secondary btn-lg" to="/settings">Settings</Button>
      </p>
    </div>
);



const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}


export default App;
