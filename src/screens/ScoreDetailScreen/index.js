import React from 'react';
import { View, FlatList } from 'react-native';
import { ScreenContainer, ScreenTitle, ScoreDetailItem } from '../../components';

function ScoreDetailScreen({ route, navigation }) {
    const scoreID = route.params.id;
    const scoreDetails = [
        { id: 'asd', date: '1 Ağustos 2020', type: 'Online', level: 'Medium', totalScore: 500, tlScore: 100, dolarScore: 100, euroScore: 100, poundScore: 10, goldScore: 10, bitcoinScore: 10, etheriumScore: 10, dodgeScore: 10, }
    ];

    return (
        <ScreenContainer>
            <ScreenTitle>Score Detail</ScreenTitle>

            <View style={{ height: 20, }}/>

            <FlatList
                data={scoreDetails}
                renderItem={({ item }) => (
                    <>
                        <ScoreDetailItem scoreTitle="Game Date" scoreDescription={item.date} />
                        <ScoreDetailItem scoreTitle="Game Type" scoreDescription={item.type} />
                        <ScoreDetailItem scoreTitle="Game Level" scoreDescription={item.level} />
                        <ScoreDetailItem scoreTitle="Total Score" scoreDescription={item.totalScore} />
                        <ScoreDetailItem scoreTitle="TL Score" scoreDescription={item.tlScore} />
                        <ScoreDetailItem scoreTitle="Dolar Score" scoreDescription={item.dolarScore} />
                        <ScoreDetailItem scoreTitle="Euro Score" scoreDescription={item.euroScore} />
                        <ScoreDetailItem scoreTitle="Pound Score" scoreDescription={item.poundScore} />
                        <ScoreDetailItem scoreTitle="Gold Score" scoreDescription={item.goldScore} />
                        <ScoreDetailItem scoreTitle="Bitcoin Score" scoreDescription={item.bitcoinScore} />
                        <ScoreDetailItem scoreTitle="Etherium Score" scoreDescription={item.etheriumScore} />
                        <ScoreDetailItem scoreTitle="Dodge Score" scoreDescription={item.dodgeScore} />
                    </>
                )}
            />
        </ScreenContainer>
    );
}

export default ScoreDetailScreen;