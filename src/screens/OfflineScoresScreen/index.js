import React, { useState, useEffect } from 'react';
import {FlatList, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import { ScoreItem } from '../../components';
import firestore from "@react-native-firebase/firestore";

function OfflineScoresScreen() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        getScores();
    }, []);

    async function getScores() {
        firestore().collection('Scores')
            .where('gameType', '==', 'Offline')
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

OfflineScoresScreen.propTypes = {
    scores: PropTypes.array.isRequired,
};

export default OfflineScoresScreen;