import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        marginBottom: 30,
        padding: 30,
        backgroundColor: '#0f1477',
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    firstCircle: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 50,
        height: 50,
        backgroundColor: 'red',
        opacity: 0.3,
        borderRadius: 100,
    },
    secondCircle: {
        position: 'absolute',
        top: 30,
        right: 50,
        width: 30,
        height: 30,
        backgroundColor: 'green',
        opacity: 0.4,
        borderRadius: 100,
    },
    thirdCircle: {
        position: 'absolute',
        top: 16,
        right: 50,
        width: 20,
        height: 20,
        backgroundColor: 'white',
        opacity: 0.1,
        borderRadius: 100,
    },
});

export default styles;