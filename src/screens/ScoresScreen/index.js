import React, { useState, useEffect } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { TabView, TabBar } from 'react-native-tab-view';
import OnlineScoresScreen from '../OnlineScoresScreen';
import OfflineScoresScreen from '../OfflineScoresScreen';
import { CustomStatusBar } from '../../components';

function ScoresScreen() {
    const [index, setIndex] = useState(0);
    const [scores, setScores] = useState([]);

    const [routes] = useState([
        { key: 'online', title: 'Online Games' },
        { key: 'offline', title: 'Offline Games' },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'online':
                return <OnlineScoresScreen scores={scores} />;
            case 'offline':
                return <OfflineScoresScreen scores={scores} />;
            default:
                return null;
        }
    };

    const initialLayout = { width: Dimensions.get('window').width };

    function TabBarComponent(props) {
        return (
            <TabBar
                { ...props }
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ backgroundColor: 'black' }}
            />
        );
    }

    const isFocused = useIsFocused();

    useEffect(() => {
        getScores();
    }, []);

    async function getScores() {
        firestore().collection('Scores').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    const score = {
                        id: doc.id,
                        ...data
                    };
                    setScores(sc => [...sc, score]);
                });
            });
    }

    return (
        <View style={{ flex: 1, }}>
            {isFocused && (
                <CustomStatusBar barStyle='light-content' backgroundColor='black' />
            )}

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={TabBarComponent}
            />
        </View>
    );
}

export default ScoresScreen;