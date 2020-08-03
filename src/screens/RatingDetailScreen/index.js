import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {
  ScreenContainer,
  ScreenHeader,
  ScoreDetailItem,
} from '../../components';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

function RatingDetailScreen({ route }) {
  const scoreID = route.params.id;
  const scoreIndex = route.params.index + 1;
  const [score, setScore] = useState({});

  useEffect(() => {
    const scoreRef = firestore().collection('Scores').doc(scoreID);
    scoreRef.get().then((doc) => {
      const data = doc.data();
      setScore(data);
    });
  }, []);

  const allScores = score.scores;
  const trimmedDate = moment(score.date).format('LL');
  const trimmedType = () => {
    if (score.gameType === 0) {
      return 'Online';
    } else {
      return 'Offline';
    }
  };

  const trimmedLevel = () => {
    const scoreLevel = score.gameLevel;

    if (scoreLevel === 'Very Easy') {
      return 'Very Easy';
    } else if (scoreLevel === 'Easy') {
      return 'Easy';
    } else if (scoreLevel === 'Medium') {
      return 'Medium';
    } else if (scoreLevel === 'Hard') {
      return 'Hard';
    } else {
      return 'Very Hard';
    }
  };

  return (
    <ScreenContainer>
      <ScreenHeader title="Rating Detail" />

      <View style={{ height: 20 }} />

      {Object.keys(score).length !== 0 && (
        <>
          <ScoreDetailItem scoreTitle="Rating" scoreDescription={scoreIndex} />
          <ScoreDetailItem
            scoreTitle="Game Date"
            scoreDescription={trimmedDate}
          />
          <ScoreDetailItem
            scoreTitle="Game Type"
            scoreDescription={trimmedType()}
          />
          <ScoreDetailItem
            scoreTitle="Game Level"
            scoreDescription={trimmedLevel()}
          />
          <ScoreDetailItem
            scoreTitle="Total Score"
            scoreDescription={allScores.score}
          />
          <ScoreDetailItem
            scoreTitle="TL Score"
            scoreDescription={allScores.tlScore}
          />
          <ScoreDetailItem
            scoreTitle="Dolar Score"
            scoreDescription={allScores.dolarScore}
          />
          <ScoreDetailItem
            scoreTitle="Euro Score"
            scoreDescription={allScores.euroScore}
          />
          <ScoreDetailItem
            scoreTitle="Pound Score"
            scoreDescription={allScores.poundScore}
          />
          <ScoreDetailItem
            scoreTitle="Gold Score"
            scoreDescription={allScores.goldScore}
          />
          <ScoreDetailItem
            scoreTitle="Bitcoin Score"
            scoreDescription={allScores.bitcoinScore}
          />
          <ScoreDetailItem
            scoreTitle="Etherium Score"
            scoreDescription={allScores.etheriumScore}
          />
          <ScoreDetailItem
            scoreTitle="Dodge Score"
            scoreDescription={allScores.dodgeScore}
          />
        </>
      )}
    </ScreenContainer>
  );
}

export default RatingDetailScreen;
