import React from 'react';


function Buttons() {
  return (
      <div className="buttons">
        <a href="mailto:diego_ggv@pm.me" 
           className="buttons__email">
          <i className="fa-solid fa-envelope icon"/>
          Email
        </a>
        <a href="https://www.linkedin.com/in/diego-ggv/" 
           target="_blank"
           className="buttons__social">
          <i className="fa-brands fa-linkedin icon"></i>
          LinkedIn
        </a>
        
      </div>
  )
}

export default Buttons