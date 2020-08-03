import React from 'react';
import { View, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { HomeButton, HomeButtonContainer } from '../../components';

function Home({ navigation }) {
  const statusBarHeight = getStatusBarHeight();

  function goToGameScreen() {
    navigation.navigate('GameScreen');
  }

  function goToScoresScreen() {
    navigation.navigate('Scores', { screen: 'ScoresScreen' });
  }

  function goToRatingsScreen() {
    navigation.navigate('ScoresScreen');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          padding: 30,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <HomeButtonContainer>
          <HomeButton text="New Game" iconName="circle" func={goToGameScreen} />
        </HomeButtonContainer>

        <HomeButtonContainer>
          <HomeButton
            bgColor="indigo"
            text="Show your all scores"
            iconName="activity"
            func={goToScoresScreen}
          />
        </HomeButtonContainer>

        <HomeButtonContainer>
          <HomeButton
            bgColor="mediumseagreen"
            text="Show ratings"
            iconName="trending-up"
            func={goToRatingsScreen}
          />
        </HomeButtonContainer>

        <HomeButtonContainer>
          <HomeButton
            bgColor="mediumblue"
            text="Sign Out"
            iconName="log-out"
            func={() => auth().signOut()}
          />
        </HomeButtonContainer>
      </View>
    </>
  );
}

export default Home;
