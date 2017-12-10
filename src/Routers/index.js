import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from '../Components/LoginForm';
import Messages from '../Components/Messages';
import SwiperImages from '../Components/SwiperImages';
import DashBoard from '../Components/DashBoard';
import { styles } from './styles';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 10 }}>
      <Scene key="auth" component={LoginForm} hideNavBar />
      <Scene key="main">
        <Scene
          key="dashboard"
          component={DashBoard}
          title="DashBoard"
          navigationBarStyle={styles.navigationBarStyle}
          titleStyle={styles.titleStyle}
        />
        <Scene
          key="messages"
          hideBackImage
          component={Messages}
          title="Messages"
          navigationBarStyle={styles.navigationBarStyle}
          titleStyle={styles.titleStyle}
        />
        <Scene key="swipper" component={SwiperImages} hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
