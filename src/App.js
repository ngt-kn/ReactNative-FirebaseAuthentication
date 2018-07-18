
import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4Clg59uFlaU6WAf34wyFJ7Sp3Uokvt2s',
      authDomain: 'authreactnative-ddf90.firebaseapp.com',
      databaseURL: 'https://authreactnative-ddf90.firebaseio.com',
      projectId: 'authreactnative-ddf90',
      storageBucket: 'authreactnative-ddf90.appspot.com',
      messagingSenderId: '501791093216'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
