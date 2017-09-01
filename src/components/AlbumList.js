// import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
// import axios from 'axios';

// Make a component
// const AlbumList = () => {
class AlbumList extends Component {
	componentWillMount() {
		//causes it to fetch data right away
		// axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => response.json())
		.then((responseData) => {
			console.log(responseData);
		});
	}

	render() {
		return (
			<View >
				<Text>Album List!!!</Text>
			</View>
		);
	}
}


// Make the component available to other parts of the app
export default AlbumList;
