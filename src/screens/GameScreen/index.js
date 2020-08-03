import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { saveOnlineGame, saveOfflineGame } from './functions';
import styles from "./styles";

function GameScreen({ navigation }) {
    const [totalTime, setTotalTime] = useState(10);
    const [score, setScore] = useState(0);
    const [bitcoinScore, setBitcoinScore] = useState(0);
    const [dodgeScore, setDodgeScore] = useState(0);
    const [dolarScore, setDolarScore] = useState(0);
    const [etheriumScore, setEtheriumScore] = useState(0);
    const [euroScore, setEuroScore] = useState(0);
    const [goldScore, setGoldScore] = useState(0);
    const [poundScore, setPoundScore] = useState(0);
    const [tlScore, setTLScore] = useState(0);
    const [moneyNumber, setMoneyNumber] = useState();
    const [placeNumber, setPlaceNumber] = useState();
    const money = [
        require('../../assets/images/tl.png'),
        require('../../assets/images/dolar.png'),
        require('../../assets/images/euro.png'),
        require('../../assets/images/pound.png'),
        require('../../assets/images/gold.png'),
        require('../../assets/images/bitcoin.png'),
        require('../../assets/images/etherium.png'),
        require('../../assets/images/dodge.png'),
    ];

    const alertMessage = `The game is over. You have caught ${score} coins in total and ${tlScore} Turkish Lira, ${dolarScore} Dolar, ${euroScore} Euro, ${poundScore} Pound, ${goldScore} Gold, ${bitcoinScore} Bitcoin, ${etheriumScore} Etherium, ${dodgeScore} Dodge.`;

    useEffect(() => {
        setTimeout(() => {
            return startGame();
        }, 3000);
    }, []);

    useEffect(() => {
        if (totalTime === 0) {
            const userEmail = auth().currentUser.email;
            const usersCollection = firestore().collection('Users');

            usersCollection
                .where('email', '==', userEmail)
                .get()
                .then(userDocs => {
                    const userDoc = userDocs.docs[0];
                    const userData = userDoc.data();

                    const userGameType = userData.gameType;

                    if (userGameType === 0) {
                        saveOnlineGame({
                            score,
                            tlScore,
                            dolarScore,
                            euroScore,
                            poundScore,
                            goldScore,
                            bitcoinScore,
                            etheriumScore,
                            dodgeScore
                        });
                    } else {
                        saveOfflineGame({
                            score,
                            tlScore,
                            dolarScore,
                            euroScore,
                            poundScore,
                            goldScore,
                            bitcoinScore,
                            etheriumScore,
                            dodgeScore
                        });
                    }
                });


            Alert.alert(
                "Game is over!",
                alertMessage,
                [
                    {
                        text: 'Finish',
                        onPress: () => finishGame(),
                    },
                    {
                        text: 'New Game',
                        onPress: () => newGame(),
                    },
                ]);
        }
    }, [totalTime]);

    function startGame() {
        let time = 0;

        setInterval(() => {
            if (time !== 10) {
                setMoneyNumber(Math.floor(Math.random() * 8));
                setPlaceNumber(Math.floor(Math.random() * 12));
                time++;
                setTotalTime(totalTime => totalTime - 1);
            }
        }, 1000);
    }

    function increaseScore() {
        setScore(score => score + 1);

        if (moneyNumber === 0) {
            setTLScore(score => score + 1);
        } else if (moneyNumber === 1) {
            setDolarScore(score => score + 1);
        } else if (moneyNumber === 2) {
            setEuroScore(score => score + 1);
        } else if (moneyNumber === 3) {
            setPoundScore(score => score + 1);
        } else if (moneyNumber === 4) {
            setGoldScore(score => score + 1);
        } else if (moneyNumber === 5) {
            setBitcoinScore(score => score + 1);
        } else if (moneyNumber === 6) {
            setEtheriumScore(score => score + 1);
        } else {
            setDodgeScore(score => score + 1);
        }
    }

    function finishGame() {
        navigation.navigate('Scores', { screen: 'ScoresScreen' });
    }

    function newGame() {
        setTotalTime(10);
        setScore(0);
        setBitcoinScore(0);
        setDodgeScore(0);
        setDolarScore(0);
        setEtheriumScore(0);
        setEuroScore(0);
        setGoldScore(0);
        setPoundScore(0);
        setTLScore(0);
        startGame();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.timeText}>Time: {totalTime}</Text>
                <Text>Score: {score}</Text>
            </View>

            <View style={styles.moneyRow}>
                <View style={styles.moneyColumn} onPress={increaseScore}>
                    {placeNumber === 0 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>

                    )}
                </View>

                <View style={styles.moneyColumn}>
                    {placeNumber === 1 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.moneyColumn}>
                    {placeNumber === 2 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View style={styles.moneyRow}>
                <View style={styles.moneyColumn}>
                    {placeNumber === 3 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.moneyColumn}>
                    {placeNumber === 4 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.moneyColumn}>
                    {placeNumber === 5 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View style={styles.moneyRow}>
                <View style={styles.moneyColumn}>
                    {placeNumber === 6 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.moneyColumn}>
                    {placeNumber === 7 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.moneyColumn}>
                    {placeNumber === 8 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <View style={styles.moneyRow}>
                <View style={styles.moneyColumn}>
                    {placeNumber === 9 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.moneyColumn}>
                    {placeNumber === 10 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.moneyColumn}>
                    {placeNumber === 11 && (
                        <TouchableOpacity onPress={increaseScore}>
                            <Image
                                style={styles.moneyImage}
                                source={money[moneyNumber]}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
}

export default GameScreen;