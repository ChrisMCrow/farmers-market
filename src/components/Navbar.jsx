import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const style = {
    backgroundColor: '#1a0d00',
    color: '#fff2e6',
    fontFamily: 'Allerta Stencil',
    padding: '20px',
    textAlign: 'center',
    position: 'absolute',
    left: '0',
    width: '100%',
    fontSize: '36px',
    marginTop: '30px'
  }
  return(
    <div>
      <div className="Navbar" style={style} >
        <Link to="/">HomePage</Link> | <Link to="/schedule">Schedule</Link> | <Link to="/produce">Produce</Link>
      </div>
    </div>
  );
}

export default Navbar;