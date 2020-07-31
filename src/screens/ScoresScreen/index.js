import React, {Fragment} from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import OnlineScoresScreen from '../OnlineScoresScreen';
import OfflineScoresScreen from '../OfflineScoresScreen';
import {SafeAreaView} from "react-native-safe-area-context";

function ScoresScreen() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'online', title: 'Online Games' },
        { key: 'offline', title: 'Offline Games' },
    ]);

    const renderScene = SceneMap({
        online: OnlineScoresScreen,
        offline: OfflineScoresScreen,
    });

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

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar barStyle='light-content' backgroundColor='black' />

            <TabView
                style={{ flex: 1, paddingTop: StatusBar.currentHeight, }}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={TabBarComponent}
            />
        </SafeAreaView>
    );
}

export default ScoresScreen;