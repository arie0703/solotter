import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: []
        }
    }
    handleSubmit = (values) => {
        values.preventDefault();
        this.setState({
            values: values
        });
        this.post(values)
      }

    post = (values) => {
        console.log(values.target.body.value)
        let instance = axios.create({
            baseURL: 'http://localhost:8080',
        })

        instance.post('/api/posts/new', {
            body: values.target.body.value,
        }).then(function (response) {
            console.log(response.data);
        })
        this.props.setUpdate(true)
    }


    render() {
        return (
        <div className="newPost">
            
            <form onSubmit={this.handleSubmit.bind(this)} class="post_form">
            <Box sx={{display: "flex", margin: "0 auto", justifyContent: "center", width: "80%"}}>
            <TextField
            name="body" 
            InputProps={{
              style: {color: 'white'}
            }}
            sx={{width: "40%",outlineColor: '#fff', }}
            type="text"
            InputLabelProps={{ style: {color: 'white'}}}
            label="body" 
            defaultValue="" 
            variant="outlined"
            margin="dense"
            fullWidth
            /><br/>

            <Button type="submit" variant="contained" sx={{height: "50px", margin:"10px 4px", backgroundColor: "#1DA1F2"}}>Tweet</Button>
            </Box>
            </form>
            
        </div>
        );
    }
}

export default NewPost;