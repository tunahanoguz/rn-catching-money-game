import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.05)'
    },
    itemBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalScore: {
        fontWeight: 'bold',
    },
});

export default styles;