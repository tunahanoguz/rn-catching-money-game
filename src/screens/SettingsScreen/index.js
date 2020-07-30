import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ScreenContainer, ScreenTitle } from '../../components';
import SettingsItem from "../../components/SettingsItem";

function SettingsScreen() {
    const [gameType, setGameType] = useState(0);
    const [gameLevel, setGameLevel] = useState(0);
    const [colorMode, setColorMode] = useState(0);

    return (
        <ScrollView>
            <ScreenContainer>
                <ScreenTitle>Settings</ScreenTitle>

                <SettingsItem
                    title="Game Type"
                    settings={
                        [
                            {
                                title: 'Online',
                                description: 'The scores obtained are recorded for competitive purposes. Requires internet.',
                            },
                            {
                                title: 'Offline',
                                description: 'The scores obtained are stored in local memory. No internet required.',
                            },
                        ]
                    }
                    state={gameType}
                    setSettingState={setGameType}
                />

                <SettingsItem
                    title="Game Level"
                    settings={
                        [
                            {title: 'Very Easy', description: 'The location and type of coins change every three second.'},
                            {title: 'Easy', description: 'The location and type of coins change every two second.'},
                            {title: 'Medium', description: 'The location and type of coins change every one second.'},
                            {title: 'Hard', description: 'The location and type of coins change every half second.'},
                            {title: 'Very Hard', description: 'The location and type of coins change every quarter second.'},
                        ]
                    }
                    state={gameLevel}
                    setSettingState={setGameLevel}
                />

                <SettingsItem
                    title="Color Mode"
                    settings={
                        [
                            {title: 'Light Mode', description: 'It allows you to use the entire application and the game board in light colors.'},
                            {title: 'Dark Mode', description: 'It allows you to use the entire application and the game board in dark colors.'},
                        ]
                    }
                    state={colorMode}
                    setSettingState={setColorMode}
                />
            </ScreenContainer>
        </ScrollView>
    );
}

export default SettingsScreen;