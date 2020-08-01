import React from 'react';
import { View, FlatList } from 'react-native';
import { ScreenContainer, ScreenTitle, RatingItem, BlockButton } from '../../components';

function RatingsScreen() {
    const ratings = [
        { playerUsername: 'tunahanoguz' , totalScore: 500 , date: '10 Ağustos 2020' },
        { playerUsername: 'johndoe' , totalScore: 100 , date: '11 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
    ];

    return (
        <ScreenContainer>
            <ScreenTitle>Ratings</ScreenTitle>

            <View style={{ height: 10, }} />

            <FlatList
                data={ratings}
                renderItem={({ item }) => <RatingItem playerUsername={item.playerUsername} totalScore={item.totalScore} date={item.date} />}
            />

            <View style={{ height: 10, }} />

            <BlockButton func={() => console.log("More")}>See More</BlockButton>
        </ScreenContainer>
    );
}

export default RatingsScreen;