import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = () => {
	return (
		<View style={styles.card}>
			<View style={styles.imageWrapper}>
				<Image
					source={{
						uri:
							'https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/ca_0629NID_Numbers_Green_online.jpg?itok=IB-AqqdD',
					}}
					style={styles.image}
				/>
			</View>

			<View style={styles.titleWrapper}>
				<Text style={styles.title}>Dummy Title</Text>
				<MaterialIcons name="favorite-border" color="#72bcd4" size={24} />
			</View>

			<View style={styles.descriptionWrapper}>
				<Text style={styles.description}>Dummy description</Text>
			</View>
		</View>
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
		fontFamily: 'Poppins-SemiBold',
		fontSize: 20,
	},
	descriptionWrapper: {
		paddingHorizontal: 15,
	},
	description: {
		fontFamily: 'Poppins-Regular',
		fontSize: 15,
		marginTop: 10,
	},
});
export default Card;
