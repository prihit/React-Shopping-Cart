import React, { Component } from 'react';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></span>
      </nav> );
    }
}
 
export default Navbar;