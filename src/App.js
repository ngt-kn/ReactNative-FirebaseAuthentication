
import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null}

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4Clg59uFlaU6WAf34wyFJ7Sp3Uokvt2s',
      authDomain: 'authreactnative-ddf90.firebaseapp.com',
      databaseURL: 'https://authreactnative-ddf90.firebaseio.com',
      projectId: 'authreactnative-ddf90',
      storageBucket: 'authreactnative-ddf90.appspot.com',
      messagingSenderId: '501791093216'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return  (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection
            style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Spinner size="large" />
          </CardSection>
        );
    }

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
