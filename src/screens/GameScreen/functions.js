import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function saveGame(scores) {
    const userID = auth().currentUser.uid;
    const userCollection = firestore().collection(`Users/${userID}/Scores`);
    // const userDocument = userCollection.doc(userID).collection('Scores').doc();
    userCollection.add(scores);
}

export { saveGame };