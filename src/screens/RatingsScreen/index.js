import React from 'react';
import { View, FlatList } from 'react-native';
import { ScreenContainer, ScreenTitle, RatingItem, BlockButton } from '../../components';

function RatingsScreen() {
    const ratings = [
        { ratingID: 'asd', playerUsername: 'tunahanoguz' , totalScore: 500 , date: '10 Ağustos 2020' },
        { ratingID: 'asda', playerUsername: 'johndoe' , totalScore: 100 , date: '11 Ağustos 2020' },
        { ratingID: 'asds', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdasd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdasdasd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdasdadsasd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdasdasdasdasd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdasdasdasdasdasd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdasdadsasdasdadsasd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdasdadsadsasdasdasdasd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
        { ratingID: 'asdasdadsadsadsasdasdasdasd', playerUsername: 'exampleusername' , totalScore: 300 , date: '12 Ağustos 2020' },
    ];

    return (
        <ScreenContainer>
            <ScreenTitle>Ratings</ScreenTitle>

            <View style={{ height: 10, }} />

            <FlatList
                data={ratings}
                renderItem={({ item }) => <RatingItem key={item.ratingID} ratingID={item.ratingID} playerUsername={item.playerUsername} totalScore={item.totalScore} date={item.date} />}
            />

            <View style={{ height: 10, }} />

            <BlockButton func={() => console.log("More")}>See More</BlockButton>
        </ScreenContainer>
    );
}

export default RatingsScreen;