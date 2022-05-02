import React, { Component, useState, useEffect  } from 'react';
import axios from 'axios';
import './index.css';
import NewPost from './components/newPost';

const App = ()  => {
  const [isLoaded, setLoad] = useState(false)
  const [posts, setPosts] = useState([])
  const [isUpdated, setUpdate] = useState(false)

  useEffect(() => {

    const loadApi = async() => {
      let instance = axios.create({
        baseURL: 'http://localhost:8080',
      })
      try {
        const response = await instance.get('/api/posts')
        
        setPosts(response.data)
        setLoad(true)
        console.log(posts.length)
      } catch (e) {
        console.log(e);
      }
    };
    loadApi();

    setUpdate(false)

  }, [isUpdated]);



    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <div class="post_list">
          <p>Solotter</p>
          <NewPost
            setUpdate={setUpdate}
          />
          {posts.map((item) => (
            <div class="post" key={item.id}>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      );
    }
}

export default App;