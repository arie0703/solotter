import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
            <TextField
            name="body" 
            InputProps={{
              style: {color: 'white'}
            }}
            sx={{width: "40%",borderColor: 'white'}}
            type="text"
            InputLabelProps={{ style: {color: 'white'}}}
            label="body" 
            defaultValue="" 
            variant="outlined"
            margin="dense"
            fullWidth
            /><br/>

            <Button type="submit">Tweet</Button>
            </form>
        </div>
        );
    }
}

export default NewPost;