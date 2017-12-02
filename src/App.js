import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import SplashScreen from 'react-native-smart-splash-screen';
import reducers from './Reducers';
import Router from './Routers';
import rootSaga from './Actions/sagaIndex';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
store.runSaga = sagaMiddleware.run(rootSaga);

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
          <StatusBar translucent backgroundColor="black" />
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
