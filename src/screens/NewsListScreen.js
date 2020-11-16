import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../Components/Card';
import * as newsAction from '../redux/actions/newsAction';

const NewsListScreen = (props) => {
	// console.log(props);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(newsAction.fetchArticles());
	}, [dispatch]);

	const articles = useSelector((state) => state.news.articles);
	console.log(articles);

	return <Card navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

export default NewsListScreen;
