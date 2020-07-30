import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

function SettingsItem({ title, settings }) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemTitle}>{ title }</Text>

            <View>
                <View>
                    <Text style={styles.settingTitle}>{ settings.title }</Text>
                    <Text style={styles.settingDescription}>{ settings.description }</Text>
                </View>

                <View style={styles.checkCircleOuter}>
                    <View style={styles.checkCircleInner} />
                </View>
            </View>
        </View>
    );
}

SettingsItem.propTypes = {
    title: PropTypes.string.isRequired,
    settings: PropTypes.arrayOf.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        state: PropTypes.number.isRequired,
    }),
};

export default SettingsItem;