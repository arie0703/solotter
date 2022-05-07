import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import * as party from "party-js";

class PostCard extends Component {
    constructor(props) {
        super(props)
    }
    deletePost = (id) => {
        let instance = axios.create({
          baseURL: 'http://localhost:8080',
        })
        instance.delete('/api/posts/delete/' + id)
        this.props.setUpdate(true)
    }

    pushLike = (id, item) => {
        let instance = axios.create({
            baseURL: 'http://localhost:8080',
        })
        instance.put('/api/posts/update/' + id,
            {
                body: item.body,
                likes: item.likes + 1,
                created_at: item.created_at,
            }
        )
        this.props.setUpdate(true)
        document.querySelector("#like-button-" + id).addEventListener("click", function (e) {
            party.confetti(this, {
                count: party.variation.range(20, 40),
            });
        });
    }



    render() {
        return(
            <Card class="post">
                <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {this.props.item.body}
                </Typography>
                <Typography variant="caption">
                    {this.props.item.created_at}
                </Typography>
                </CardContent>
                <CardActions sx={{display: "flex"}}>
                <Box>
                    <IconButton sx={{color: "#bbb"}} onClick={() => {this.deletePost(this.props.item.id)}}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton sx={{color: "#fc94af"}} onClick={() => {this.pushLike(this.props.item.id, this.props.item)}} id={'like-button-' + this.props.item.id}>
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant="caption">{this.props.item.likes}</Typography>
                </Box>
                </CardActions>
            </Card>
        )
    }

}

export default PostCard;