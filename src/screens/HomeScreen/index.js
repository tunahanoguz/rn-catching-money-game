import React from 'react';
import { View, Text } from 'react-native';
import { NewGameButton, ShowPlayerRankingButton } from "../../components";
import styles from "./styles";

function Home() {
    return (
        <View style={styles.container}>
            <NewGameButton />
            <ShowPlayerRankingButton />
        </View>
    );
}

export default Home;