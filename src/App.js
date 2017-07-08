import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './App.css';

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
      <p className="App-intro mt-3">
        Consider buttons like these
      </p>

      <p>
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
              style={{  }}
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
              style={{  }}
            />
            <FontAwesome
              name='star-o'
              className='fa-stack-1x text-warning'
              size='1x'
              style={{  }}
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
          <DropdownButton
            name='button'
            className="btn-secondary"
            title='Edit'

            >
            <span className="fa-stack">
            <FontAwesome
              name='cloud'
              className='fa-stack-2x'
              size='2x'
              style={{  }}
            />
            <FontAwesome
              name='terminal'
              className='fa-stack-1x'
              size='1x'
              style={{ color: 'white' }}
            />
          </span>
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
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
      <p className="row justify-content-around">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
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
