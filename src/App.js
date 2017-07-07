import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, Link } from 'react-router';
import { Button, ButtonGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header row justify-content-around align-items-center">
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
      <p className="App-intro mt-3">
        Consider buttons like these
      </p>

      <p>
        <ButtonGroup>
          <Button
            name='button'
            className="btn-lg btn-danger"
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
            className="btn-lg btn-success"
          >Commune <span className="fa-stack">
            <FontAwesome
              name='comment'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='microchip'
              className='fa-stack-1x text-success'
              size='1x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
            />
          </span>
          </Button>
          <Button
            name='button'
            className="btn-lg btn-primary"
          >Acquire <span className="fa-stack">
            <FontAwesome
              name='circle'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='flag'
              className='fa-stack-1x text-primary'
              size='1x'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)' }}
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
      <Button
        name='button'
        className="btn-lg btn-secondary mono"

      >Learn More
      </Button>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
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
