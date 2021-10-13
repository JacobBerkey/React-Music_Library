import React, { Component } from 'react'
import axios from "axios";


class SongForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            artist:'',
            album:'',
            release_date:'',
            genre:''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            genre: this.state.genre,
            release_date: this.state.release_date
        }
        axios
        .post('http://127.0.0.1:8000/music/', song)
        .then(response => {
            console.log(response);
            this.clearState();
            this.props.createSongCallback(response.data);
            return response;
      })
        .catch(error => console.log(error));
    };

    clearState = () => {
        this.setState({
          title: '',
          artist: '',
          album: '',
          genre: '',
          release_date: '',
        });
      }

    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input name='title' onChange={this.handleChange} value={this.state.title}/>
                <label>Artist</label>
                <input name='artist' onChange={this.handleChange} value={this.state.artist}/>
                <label>Album</label>
                <input name='album' onChange={this.handleChange} value={this.state.album}/>
                <label>Genre</label>
                <input name='genre' onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label>
                <input name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
                <button type="submit">Create Song</button>

            </form>
        )
    }
}
 
export default SongForm;