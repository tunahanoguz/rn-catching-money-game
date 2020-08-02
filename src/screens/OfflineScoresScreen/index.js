import React, { useState, useEffect } from 'react';
import {FlatList, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";
import { ScoreItem } from '../../components';

function OfflineScoresScreen() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        getScores();
    }, []);

    async function getScores() {
        const userID = auth().currentUser.uid;
        firestore().collection('Scores')
            .where('gameType', '==', 'Offline')
            .where('userID', '==', userID)
            .orderBy('scores.score', 'desc').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    const score = {
                        id: doc.id,
                        ...data
                    };
                    setScores(sc => [...sc, score]);
                });
            })
            .catch(error => console.log(error));
    }

    return (
        <View style={{ flex: 1, padding: 30, }}>

            {scores.length !== 0 ? (
                <FlatList
                    data={scores}
                    renderItem={({ item }) => <ScoreItem scoreID={item.id} totalScore={item.scores.score} date={item.date} />}
                />
            ) : (
                <Text>There is no score yet.</Text>
            )}

        </View>
    );
}

export default OfflineScoresScreen;