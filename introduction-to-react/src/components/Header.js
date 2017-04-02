import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <h1 id="special-header" className="header" onClick={ (event) => { alert('Roar!')} }>
        I am a React element! Hear me roar!!
      </h1>
    );
  }
};

export default Header;
