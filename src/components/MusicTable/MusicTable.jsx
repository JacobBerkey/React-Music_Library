import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'





class AllSongs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs:[]
         }
    }

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data
        })
    }

    async deleteSong(songID){
        let response = await axios.delete('http://127.0.0.1:8000/music/' + songID);
        console.log(response);
        window.location.reload();
    }

    render() { 
        return ( 
            <div>
            <h2>Your Playlist:</h2>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Album</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Delete Song</th>
                    </tr>
                </thead>
                {this.state.songs.map((song)=>{
                    return(
                        <tbody>
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td><Button variant="danger" onClick ={()=> this.deleteSong(song.id)}>Delete</Button></td>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
            </div>
        )
    }
}
 
export default AllSongs;