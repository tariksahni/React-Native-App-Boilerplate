import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from '../Components/LoginForm';
import Messages from '../Components/Messages';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 10 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} hideNavBar />
      </Scene>
      <Scene key="main">
        <Scene
          key="messages"
          component={Messages}
          title="Messages"
          navigationBarStyle={styles.navigationBarStyle}
          titleStyle={styles.titleStyle}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: '#757575',
    height: '12%'
  },
  titleStyle: {
    fontFamily: 'HelveticaNeueBold',
    color: '#FFF',
    marginTop: 19
  }
};

export default RouterComponent;
