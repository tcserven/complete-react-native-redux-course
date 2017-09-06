// import libraries for making a component
import React from 'react';
import { View } from 'react-native';


// Make a component
const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		elevation: 2,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 10
	}
};

// Make the component available to other parts of the app
export default Card;
