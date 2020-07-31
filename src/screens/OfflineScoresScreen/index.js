import React from 'react';
import { FlatList } from 'react-native';
import { ScoreItem } from '../../components';

function OfflineScoresScreen() {
    const scores = [
        { id: 'score-1', totalScore: 100, date: '31 Temmuz 2020' },
        { id: 'score-2', totalScore: 200, date: '1 Ağustos 2020' },
        { id: 'score-3', totalScore: 300, date: '2 Ağustos 2020' },
    ];

    return (
        <FlatList
            data={scores}
            renderItem={({ item }) => <ScoreItem scoreID={item.id} totalScore={item.totalScore} date={item.date} />}
        />
    );
}

export default OfflineScoresScreen;