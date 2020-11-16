import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './src/Components/Header';
import Card from './src/Components/Card';

const loadFonts = () => {
	return Font.loadAsync({
		'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
		'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
		);
	}
	return (
		<View>
			<Header />
			<Card />
		</View>
	);
}

const styles = StyleSheet.create({});
