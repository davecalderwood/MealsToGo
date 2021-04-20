import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantsStack.Navigator 
            headerMode="none"
            screenOptions={{...TransitionPresets.ModalPresentationIOS
            }}>
            <RestaurantsStack.Screen 
                name="Restaurants"
                component={RestaurantsScreen}
            />
            <RestaurantsStack.Screen 
                name="RestaurantsDetail"
                component={() => <Text>Restaurant Deatil</Text>}
            />
        </RestaurantsStack.Navigator>
    );
}