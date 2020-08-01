import React from 'react';
import { View, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { getStatusBarHeight } from "react-native-status-bar-height";
import { HomeButton, HomeButtonContainer } from "../../components";

function Home() {
    const statusBarHeight = getStatusBarHeight();

    return (
        <>
            <StatusBar barStyle='dark-content' />

            <View style={{ flex: 1, marginTop: statusBarHeight, padding: 30, flexDirection: 'column', justifyContent: 'space-between', }}>
                <HomeButtonContainer>
                    <HomeButton text="New Game" func={() => auth().signOut()} />
                </HomeButtonContainer>

                <HomeButtonContainer>
                    <HomeButton bgColor="indigo" text="Show your all scores" func={() => console.log("Show scores!")} />
                </HomeButtonContainer>

                <HomeButtonContainer>
                    <HomeButton bgColor="mediumseagreen" text="Show ratings" func={() => console.log("Show ratings!")} />
                </HomeButtonContainer>

                <HomeButtonContainer>
                    <HomeButton bgColor="mediumblue" text="Show cups" func={() => console.log("Show cups!")} />
                </HomeButtonContainer>
            </View>
        </>
    );
}

export default Home;