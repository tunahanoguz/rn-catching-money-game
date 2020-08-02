import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function saveGame(scores) {
    const userID = auth().currentUser.uid;
    const userEmail = auth().currentUser.email;
    const usersCollection = firestore().collection('Users');

    usersCollection
        .where('email', '==', userEmail)
        .get()
        .then(userDocs => {
            const userDoc = userDocs.docs[0];
            const userData = userDoc.data();

            const userGameType = userData.gameType;
            const userGameLevel = userData.gameLevel;

            const scoresCollection = firestore().collection(`Scores`);
            scoresCollection.add({
                userID,
                scores,
                gameType: userGameType,
                gameLevel: userGameLevel,
                date: new Date(),
            });
        });
}

export { saveGame };