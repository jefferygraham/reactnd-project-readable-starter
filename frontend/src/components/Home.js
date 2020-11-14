import React, { Component } from 'react';
import parse from 'html-react-parser';

import * as API from '../api';

class Home extends Component {
  state = {
    html: '',
  };

  componentDidMount() {
    API.getHelp().then((info) => {
      this.setState(() => ({
        html: info,
      }));
    });

    API.getCategories().then((categories) => {
      console.log(categories);
    });

    API.getPosts().then((posts) => {
      console.log(posts);
    });
  }

  render() {
    return <div>{parse(this.state.html)}</div>;
  }
}

export default Home;
