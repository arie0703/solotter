import React, { Component } from 'react';
import axios from 'axios';

class GetAPI extends Component {
  constructor(props) {
    super(props);
    this.state = { //state初期化
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() { //render直後に行いたい処理を書くところ

    axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get('http://localhost:8080/api', { 
      withCredentials: true
    })
    .then(res => {
        console.log(res.data)
    })
  }


  render() {
    var { items, isLoaded } = this.state;
console.log(items);
    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <div>
          <ul>
            {Object.keys(items).map(key => (
              <li key={key}>{key} - {items[key]}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default GetAPI;