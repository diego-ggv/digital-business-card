import React from 'react';
import Buttons from './Buttons.jsx';
import Text from './Text.jsx';

function Main() {
  return(
      <main>
        <h1 className="banner">Diego <br/> Gutierrez </h1>
        
        <h3 className="banner__occupation">Frontend Developer</h3>
        <a className="website-link"
           href="https://diego-ggv.github.io" 
           target="_blank">
          <i className="fa-solid fa-code icon"></i>
          My Website
        </a>
        <Buttons />
        <Text />
      </main>
  )
}

export default Main