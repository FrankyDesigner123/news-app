import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = (props) => {
	// console.log(props);
	return (
		<TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
			<View style={styles.card}>
				<View style={styles.imageWrapper}>
					<Image
						source={{
							uri: props.image,
						}}
						style={styles.image}
					/>
				</View>

				<View style={styles.titleWrapper}>
					<Text style={styles.title}>
						{props.title.length > 25
							? props.title.slice(0, 25) + ' ...'
							: props.title}
					</Text>
					<MaterialIcons name="favorite-border" color="#72bcd4" size={24} />
				</View>

				<View style={styles.descriptionWrapper}>
					<Text style={styles.description}>
						{props.description.length > 130
							? props.description.slice(0, 130) + ' ...'
							: props.description}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		height: 300,
		margin: 20,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
	},
	imageWrapper: {
		width: '100%',
		height: '60%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
	titleWrapper: {
		height: '10%',
		paddingHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10,
	},
	title: {
		fontFamily: 'Roboto-Bold',
		fontSize: 20,
	},
	descriptionWrapper: {
		paddingHorizontal: 15,
	},
	description: {
		fontFamily: 'Roboto-Light',
		fontSize: 15,
		marginTop: 10,
	},
});
export default Card;
