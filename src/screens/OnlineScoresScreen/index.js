import React from 'react';
import { View, FlatList } from 'react-native';
import { ScreenContainer, ScoreItem } from '../../components';

function OnlineScoresScreen() {
    const scores = [
        { id: 'score-1', totalScore: 100, date: '31 Temmuz 2020' },
        { id: 'score-2', totalScore: 200, date: '1 Ağustos 2020' },
        { id: 'score-3', totalScore: 300, date: '2 Ağustos 2020' },
    ];

    return (
        <View style={{ flex: 1, padding: 30, }}>
            <FlatList
                data={scores}
                renderItem={({ item }) => <ScoreItem scoreID={item.id} totalScore={item.totalScore} date={item.date} />}
            />
        </View>
    );
}

export default OnlineScoresScreen;