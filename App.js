import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import NewsListScreen from './src/screens/NewsListScreen';

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
	return <NewsListScreen />;
}

const styles = StyleSheet.create({});
