import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function saveGame(scores) {
    const userID = auth().currentUser.uid;
    const userCollection = firestore().collection(`Scores`);
    userCollection.add({
        userID,
        scores,
        gameType: 'Online',
        gameLevel: 'Medium',
        date: new Date(),
    });
}

export { saveGame };