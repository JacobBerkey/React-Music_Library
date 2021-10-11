import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs: response.data
            })
        } catch (ex) {
            console.log("API Error", ex)
        }
    }

    createNewSong = async() => {
        try {
            await axios.post('http://127.0.0.1:8000/music/')
        } catch (ex) {
            console.log("API Create Song Error", ex)
        }
    }

    deleteSong = async(songId) => {
        try {
            await axios.delete('http://127.0.0.1:8000/music/')
        } catch (ex) {
            console.log("API Delete Song Error", ex)
        }
    }

    render() {
        return ( <
            div >
            <
            h1 > Hello World < /h1> <
            /div>
        );
    }
}

export default App;