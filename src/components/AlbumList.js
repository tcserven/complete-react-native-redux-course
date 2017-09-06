// import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
// import axios from 'axios';

// Make a component
// const AlbumList = () => {
class AlbumList extends Component {
	state = { albums: [] }; //state declaration, its empty at first


	componentWillMount() {
		//causes it to fetch data right away
		// axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => response.json())
		.then((responseData) => this.setState({ albums: responseData }));
	}

	renderAlbums() {
		return this.state.albums.map(album =>
			//<Text key={album.title}>{album.title}</Text>);
			<AlbumDetail key={album.title} album={album} />
		);
	}


	render() {
		console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}


// Make the component available to other parts of the app
export default AlbumList;
