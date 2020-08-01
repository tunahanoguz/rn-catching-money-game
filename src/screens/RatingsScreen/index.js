import React from 'react';
import { FlatList } from 'react-native';
import { ScreenContainer, ScreenTitle, RatingItem } from '../../components';

function RatingsScreen() {
    const ratings = [
        { playerUsername: 'tunahanoguz' , totalScore: 500 , date: '10 Ağustos 2020' }
    ];

    return (
        <ScreenContainer>
            <ScreenTitle>Ratings</ScreenTitle>

            <FlatList
                data={ratings}
                renderItem={({ item }) => <RatingItem playerUsername={item.playerUsername} totalScore={item.totalScore} date={item.date} />}
            />
        </ScreenContainer>
    );
}

export default RatingsScreen;