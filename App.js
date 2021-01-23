import React from 'react';
import LandingPage from './src/containers/LandingPage';
import { Router, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native';
import Login from './src/containers/Login';

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
		</Scene>
	</Router>
  );
}

const style = StyleSheet.create({
	titleStyle: {
		color: "#e65c00",
	}
});