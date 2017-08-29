// Index.ios.js - place code in here for android!

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
// const greet = (name,lastname) => { remember its the same!
const App = () => (
  <Text>Some Text</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
