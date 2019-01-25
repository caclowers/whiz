import React, { Component } from 'react';
import './App.css';

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
    image: anthro
  }, {
    name: 'Apology Whiz',
    image: apolo
  }, {
    name: 'Archaeology Whiz',
    image: archaeo
  }, {
    name: 'Astrology Whiz',
    image: astro
  }, {
    name: 'Biology Whiz',
    image: bio
  }, {
    name: 'Egyptology Whiz',
    image: egypto
  }, {
    name: 'Etymology Whiz',
    image: etymo
  }, {
    name: 'Parapsychology Whiz',
    image: parapsycho
  }, {
    name: 'Technology Whiz',
    image: techno
  },
]

class App extends Component {
  render() {

    let whizArray = whizzes.map((whiz, index) => {
      return (
        <div className="arrayDiv">
          <img
          alt={whiz.name}
          src={whiz.image}
          height="64"/>
          <h2>{whiz.name}</h2>
        </div>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>are you a whiz?</h1>
        </header>
        <section id="whizArray">
          {whizArray}
        </section>
      </div>
    );
  }
}

export default App;
