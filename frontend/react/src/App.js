import React, { Component, useState, useEffect  } from 'react';
import axios from 'axios';
import './index.css';
import NewPost from './components/newPost';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
            <p>Solotter</p>
            <NewPost
              setUpdate={setUpdate}
            />
          </div>
          {posts.map((item) => (
            <Card class="post">
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.body}
                </Typography>
                <Typography variant="caption">
                  {item.created_at}
                </Typography>
              </CardContent>
              <CardActions sx={{display: "flex"}}>
                <IconButton sx={{color: "#bbb"}} onClick={() => {deletePost(item.id)}}>
                  <DeleteIcon />
                </IconButton>
                <IconButton sx={{color: "#fc94af"}} onClick={() => {console.log("favorite")}}>
                  <FavoriteIcon />
                </IconButton>
              </CardActions>

            </Card>
          ))}
        </div>
      );
    }
}

export default App;