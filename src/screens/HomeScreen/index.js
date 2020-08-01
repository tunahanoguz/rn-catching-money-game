import React from 'react';
import { View, StatusBar } from 'react-native';
import { HomeButton } from "../../components";
import styles from "./styles";
import {getStatusBarHeight} from "react-native-status-bar-height";

function Home() {
    const statusBarHeight = getStatusBarHeight();

    return (
        <>
            <StatusBar barStyle='dark-content' />

            <View style={{ flex: 1, marginTop: statusBarHeight, padding: 30, flexDirection: 'column', justifyContent: 'space-between', }}>
                <View style={styles.buttonContainer}>
                    <HomeButton text="New Game" func={() => console.log("New game!")} />
                </View>

                <View style={styles.buttonContainer}>
                    <HomeButton bgColor="indigo" text="Show your all scores" func={() => console.log("Show scores!")} />
                </View>

                <View style={styles.buttonContainer}>
                    <HomeButton bgColor="mediumseagreen" text="Show ratings" func={() => console.log("Show ratings!")} />
                </View>

                <View style={styles.buttonContainer}>
                    <HomeButton bgColor="mediumblue" text="Show cups" func={() => console.log("Show cups!")} />
                </View>
            </View>
        </>
    );
}

export default Home;