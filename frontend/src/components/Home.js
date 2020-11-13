import React, { Component } from 'react';

import * as API from '../api';

class Home extends Component {
  state = {
    html: '',
  };

  componentDidMount() {
    API.getHelp().then((info) => {
      console.log(info);
      this.setState(() => ({
        html: info,
      }));
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.html}</h1>
      </div>
    );
  }
}

export default Home;
