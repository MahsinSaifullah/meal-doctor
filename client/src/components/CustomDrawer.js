import React from 'react';
import { View } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/component/CustomDrawerStyles';
import Colors from '../constants/Colors';
import { logout } from '../store/actions/authAction';

const CustomDrawer = (props) => {
	const user = useSelector((state) => state.auth.user);

	let avatar = require('../../assets/maleProfile.png');

	if (user) {
		if (user.gender === 'female')
			avatar = require('../../assets/femaleProfile.png');
	}

	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(logout());
	};

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{ flexDirection: 'row', marginTop: 15 }}>
							<Avatar.Image source={avatar} size={70} />
							<View style={{ marginLeft: 15, flexDirection: 'column' }}>
								<Title style={styles.title}>
									{user ? user.name : 'John Doe'}
								</Title>
								<Caption style={styles.caption}>
									{user ? user.email : 'john@doe.com'}
								</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='home-outline' color={color} size={size} />
							)}
							label='Home'
							activeBackgroundColor={Colors.primary}
							onPress={() => {
								props.navigation.navigate('Home');
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='information-outline' color={color} size={size} />
							)}
							label='About'
							activeBackgroundColor={Colors.primary}
							onPress={() => {
								props.navigation.navigate('About');
							}}
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => (
						<Icon name='exit-to-app' color={color} size={size} />
					)}
					label='Sign Out'
					onPress={handleSignOut}
				/>
			</Drawer.Section>
		</View>
	);
};

export default CustomDrawer;
