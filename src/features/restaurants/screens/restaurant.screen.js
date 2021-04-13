import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={{ padding: 16}}>
            <Searchbar />
        </View>

        <View style={{flex: 1, padding: 16, backgroundColor: "blue"}}>
            <RestaurantInfoCard />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      marginTop: StatusBar.currentHeight
    }
});