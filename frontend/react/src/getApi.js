import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class GetAPI extends Component {
  constructor(props) {
    super(props);
    this.state = { //state初期化
      isLoaded: false,
      items: []
    };
  }
  componentDidMount = async() => { //render直後に行いたい処理を書くところ

    let instance = axios.create({
      baseURL: 'http://localhost:8080',
    })

    try {
      const response = await instance.get('/api/')
      console.log(response.data)
      this.setState({
        items: response.data,
        isLoaded: true
      })

      console.log(this.state.items)

      for (const item of this.state.items) {
        console.log(item)
        console.log(item.body)
      }
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    var { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <div class="post_list">
          <p>Solotter</p>
          {items.map((item) => (
            <div class="post" key={item.id}>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default GetAPI;