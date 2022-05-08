import React, { Component, useState, useEffect  } from 'react';
import axios from 'axios';
import './index.css';
import NewPost from './components/newPost';
import PostCard from './components/PostCard';

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

  function deletePost(id) {
    let instance = axios.create({
      baseURL: 'http://localhost:8080',
    })
    instance.delete('/api/posts/delete/' + id)
    setUpdate(true)
  }



    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <div class="post_list">
          <div class="center">
            <p class="title">Solotter</p>
            <NewPost
              setUpdate={setUpdate}
            />
          </div>
          {posts.map((item) => (
            <PostCard
              setUpdate={setUpdate}
              item={item}
            >
            </PostCard>
          ))}
        </div>
      );
    }
}

export default App;