import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from '../src/components/Header.js';

//import views
import Anthropology from '../src/components/Anthropology.js';
import Apology from '../src/components/Apology.js';
import Archaeology from '../src/components/Archaeology.js';
import Astrology from '../src/components/Astrology.js';
import Biology from '../src/components/Biology.js';
import Egyptology from '../src/components/Egyptology.js';
import Parapsychology from '../src/components/Parapsychology.js';
import Etymology from '../src/components/Etymology.js';
import Technology from '../src/components/Technology.js';


//import images
import anthro from '../src/images/anthropology.png';
import apolo from '../src/images/apology.jpeg';
import archaeo from '../src/images/archaeology.jpg';
import astro from '../src/images/astrology.jpg';
import bio from '../src/images/biology.png';
import egypto from '../src/images/egyptology.jpg';
import etymo from '../src/images/etymology.jpg';
import parapsycho from '../src/images/parapsychology.jpg';
import techno from '../src/images/technology.jpg';


const whizzes = [
  {
    name: 'Anthropology Whiz',
    image: anthro,
    component: Anthropology,
    path: "/Anthropology"
  }, {
    name: 'Apology Whiz',
    image: apolo,
    component: Apology,
    path: "/Apology"
  }, {
    name: 'Archaeology Whiz',
    image: archaeo,
    component: Archaeology,
    path: "/Archaeology"
  }, {
    name: 'Astrology Whiz',
    image: astro,
    component: Astrology,
    path: "/Astrology"
  }, {
    name: 'Biology Whiz',
    image: bio,
    component: Biology,
    path: "/Biology"
  }, {
    name: 'Egyptology Whiz',
    image: egypto,
    component: Egyptology,
    path: "/Egyptology"
  }, {
    name: 'Etymology Whiz',
    image: etymo,
    component: Etymology,
    path: "/Etymology"
  }, {
    name: 'Parapsychology Whiz',
    image: parapsycho,
    component: Parapsychology,
    path: "/Parapsychology"
  }, {
    name: 'Technology Whiz',
    image: techno,
    component: Technology,
    path: "/Technology"
  },
]

class App extends Component {


  navigate = () => {

  };

  render() {

    let whizArray = whizzes.map((whiz, index) => {
      return (
        <div className="arrayDiv"
          value={whiz.name}
          onClick={this.navigate}
          key={index}>
          <Router>
            <Switch>
              <Route
                path={whiz.path}
                component={whiz.component}/>
            </Switch>
          </Router>
          <div className="arrayDiv2"
            >
            <img
              alt={whiz.name}
              src={whiz.image}
              height="64" />
            <h2>{whiz.name}</h2>
          </div>
        </div>

      )
    })

    return (
      <div className="App">
       <Header />
        <section id="whizArray">
          {whizArray}
        </section>
      </div>
    );
  }
}

export default App;
