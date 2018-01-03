import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import SplashScreen from 'react-native-smart-splash-screen';
import reducers from './Reducers';
import Router from './Routers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyD_UGCKwiP_22nBD3JX79DlRGBgkVXJlKA',
        authDomain: 'experiment-95dc4.firebaseapp.com',
        databaseURL: 'https://experiment-95dc4.firebaseio.com',
        projectId: 'experiment-95dc4',
        storageBucket: 'experiment-95dc4.appspot.com',
        messagingSenderId: '262003811578'
      });
    }
  }
  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar translucent backgroundColor="#37474f" />
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
