import React, { Component } from 'react';
import axios from 'axios'

class SongCreateForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          title : "",
          album : "",
          artist : "",
          genre : "",
          release_date : "",
        };
      }
      
      handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
    
        });
    
      }
    
      createSong = async (newSong) => {
        let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
        this.getAllSongs(); 
        return response.status; 
         
    }
    
      createSubmit = (event) => {
        event.preventDefault();
        this.props.createASong(this.state);
      };
    
      render() {
        return (
          <div>
      
                
                <form onSubmit={this.createSubmit}>
                <table>
                <tr>
                <td>Add a song:</td>
                <td><input name="title" onChange={this.handleChange} value={this.state.title}/></td>
                <td><input name="album" onChange={this.handleChange} value={this.state.album}/></td>
                <td><input name="artist" onChange={this.handleChange} value={this.state.artist}/></td>
                <td><input name="genre" onChange={this.handleChange} value={this.state.genre}/></td>
                <td><input name="release_date" onChange={this.handleChange} value={this.state.release_date}/></td>
                <td>
                  <button type="submit">Create</button>
                </td>
                </tr>
                </table>
                </form>
          </div>
        );
      }
    }
   
  export default SongCreateForm;