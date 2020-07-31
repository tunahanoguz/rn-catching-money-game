import React from 'react';
import { FlatList } from 'react-native';
import { ScreenContainer, ScreenTitle, ScoreDetailItem } from '../../components';

function ScoreDetailScreen({ route, navigation }) {
    const scoreID = route.params.id;
    const scoreDetails = [
        { id: 'asd', totalScore: 500, tlScore: 100, dolarScore: 100, euroScore: 100, poundScore: 10, goldScore: 10, bitcoinScore: 10, etheriumScore: 10, dodgeScore: 10, }
    ];

    return (
        <ScreenContainer>
            <ScreenTitle>Score Detail</ScreenTitle>

            <FlatList
                data={scoreDetails}
                renderItem={({ item }) => (
                    <>
                        <ScoreDetailItem scoreTitle="Total Score" totalScore={item.totalScore} />
                        <ScoreDetailItem scoreTitle="TL Score" totalScore={item.totalScore} />
                        <ScoreDetailItem scoreTitle="Dolar Score" totalScore={item.totalScore} />
                        <ScoreDetailItem scoreTitle="Euro Score" totalScore={item.totalScore} />
                        <ScoreDetailItem scoreTitle="Pound Score" totalScore={item.totalScore} />
                        <ScoreDetailItem scoreTitle="Gold Score" totalScore={item.totalScore} />
                        <ScoreDetailItem scoreTitle="Bitcoin Score" totalScore={item.totalScore} />
                        <ScoreDetailItem scoreTitle="Etherium Score" totalScore={item.totalScore} />
                        <ScoreDetailItem scoreTitle="Dodge Score" totalScore={item.totalScore} />
                    </>
                )}
            />
        </ScreenContainer>
    );
}

export default ScoreDetailScreen;