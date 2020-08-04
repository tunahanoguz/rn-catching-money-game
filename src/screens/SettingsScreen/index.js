import React, { useState, useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  ScreenContainer,
  ScreenTitle,
  BlockButton,
  SettingsItem,
} from '../../components';

function SettingsScreen() {
  const [gameType, setGameType] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);
  // const [colorMode, setColorMode] = useState(0);

  const userEmail = auth().currentUser.email;

  useEffect(() => {
    firestore()
      .collection('Users')
      .where('email', '==', userEmail)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const userGameType = data.gameType;
          const userGameLevel = data.gameLevel;
          // const userColorMode = data.colorMode;

          setGameType(userGameType);
          setGameLevel(userGameLevel);

          // if (userGameLevel === 'Very Easy') {
          //   setGameLevel(0);
          // } else if (userGameLevel === 'Easy') {
          //   setGameLevel(1);
          // } else if (userGameLevel === 'Medium') {
          //   setGameLevel(2);
          // } else if (userGameLevel === 'Hard') {
          //   setGameLevel(3);
          // } else {
          //   setGameLevel(4);
          // }

          // setColorMode(userColorMode === 'Light Mode' ? 0 : 1);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  function saveSettings() {
    const scoreRef = firestore()
      .collection('Users')
      .where('email', '==', userEmail)
      .limit(1);
    scoreRef.get().then((userDocs) => {
      const userDoc = userDocs.docs[0];
      userDoc.ref
        .update({
          gameType,
          gameLevel,
          colorMode,
        })
        .then(() => {
          Alert.alert('Successful!', 'Settings have been successfully saved.');
        });
    });
  }

  return (
    <ScrollView>
      <ScreenContainer>
        <ScreenTitle>Settings</ScreenTitle>

        <SettingsItem
          title="Game Type"
          settings={[
            {
              title: 'Online',
              description:
                'The scores obtained are recorded for competitive purposes. Requires internet.',
            },
            {
              title: 'Offline',
              description:
                'The scores obtained are stored in local memory. No internet required.',
            },
          ]}
          state={gameType}
          setSettingState={setGameType}
        />

        <SettingsItem
          title="Game Level"
          settings={[
            {
              title: 'Very Easy',
              description:
                'The location and type of coins change every three second.',
            },
            {
              title: 'Easy',
              description:
                'The location and type of coins change every two second.',
            },
            {
              title: 'Medium',
              description:
                'The location and type of coins change every one second.',
            },
            {
              title: 'Hard',
              description:
                'The location and type of coins change every half second.',
            },
            {
              title: 'Very Hard',
              description:
                'The location and type of coins change every quarter second.',
            },
          ]}
          state={gameLevel}
          setSettingState={setGameLevel}
        />

        {/*<SettingsItem*/}
        {/*  title="Color Mode"*/}
        {/*  settings={[*/}
        {/*    {*/}
        {/*      title: 'Light Mode',*/}
        {/*      description:*/}
        {/*        'It allows you to use the entire application and the game board in light colors.',*/}
        {/*    },*/}
        {/*    {*/}
        {/*      title: 'Dark Mode',*/}
        {/*      description:*/}
        {/*        'It allows you to use the entire application and the game board in dark colors.',*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*  state={colorMode}*/}
        {/*  setSettingState={setColorMode}*/}
        {/*/>*/}

        <BlockButton func={saveSettings}>Save</BlockButton>
      </ScreenContainer>
    </ScrollView>
  );
}

export default SettingsScreen;
