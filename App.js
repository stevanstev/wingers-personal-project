import React from 'react';
import LandingPage from './src/containers/LandingPage';
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native';
import Login from './src/containers/Login';
import Home from './src/containers/Home';

export default function App() {
	return (
	<Router>
		<Scene key="root">
			<Scene 
				key="landing"
				component={LandingPage} 
				titleStyle={style.titleStyle} 
				title="Chicken's Wing" 
				hideNavBar={true}
				initial={true} />
			<Scene 
				key="login" 
				hideNavBar={true}
				component={Login} 
				titleStyle={style.titleStyle} 
				title="Login" />

			<Scene 
				back={false}
				hideBackImage={true}
				key="home" 
				component={Home} 
				titleStyle={style.titleStyle} 
				title="Home" />
		</Scene>
	</Router>
  );
}

const style = StyleSheet.create({
	titleStyle: {
		color: "#e65c00",
	}
});