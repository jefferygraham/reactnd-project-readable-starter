import React, { Component } from 'react';
import parse from 'html-react-parser';

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
    return <div>{parse(this.state.html)}</div>;
  }
}

export default Home;
