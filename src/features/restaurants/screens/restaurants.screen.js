import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Search } from '../components/search.component';
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { colors } from "../../../infrastructure/theme/colors";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer style={{ position: 'absolute', top: '50%', left: '50%'}}>
          <Loading
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            colors={Colors.blue300}
          />
        </LoadingContainer>
      )}

      <Search />

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
            onPress={() => 
            navigation.navigate("RestaurantsDetail", {
              restaurant: item
            })}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};