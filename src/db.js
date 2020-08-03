import Realm from 'realm';

const ScoresSchema = {
    name: 'Scores',
    properties: {
        score: { type: 'int', default: 0 },
        tlScore: { type: 'int', default: 0 },
        dolarScore: { type: 'int', default: 0 },
        euroScore: { type: 'int', default: 0 },
        poundScore: { type: 'int', default: 0 },
        goldScore: { type: 'int', default: 0 },
        bitcoinScore: { type: 'int', default: 0 },
        etheriumScore: { type: 'int', default: 0 },
        dodgeScore: { type: 'int', default: 0 },
    },
};

const GameSchema = {
    name: 'Game',
    primaryKey: 'id',
    properties: {
        id: { type: 'int' },
        userID: { type: 'string' },
        scores: 'Scores',
        gameType: { type: 'int', default: 0 },
        gameLevel: { type: 'int', default: 0 },
        date: { type: 'date' },
    },
};

const databaseOptions = {
    path: 'catchingMoneyGame.realm',
    schema: [ScoresSchema, GameSchema],
    schemaVersion: 1,
};

export const insertGame = (scores, game) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
        .then(realm => {
            realm.write(() => {
                let scoresRealm = realm.create('Scores', scores, true);

                const lastGame = realm.objects('Game').sorted('id', true)[0];
                const highestID = lastGame == null ? 0 : lastGame.id;
                const finalID = highestID == null ? 1 : highestID + 1;

                realm.create('Game', {
                    scores: scoresRealm,
                    id: finalID,
                    ...game,
                });

                resolve();
            });
        })
        .catch(error => reject(error));
});

export const getGames = (userID) => new Promise((resolve, reject) => {
    Realm
        .open(databaseOptions)
        .then(realm => {
            const games = realm.objects('Game').filtered(`userID == "${userID}"`);
            resolve(games);
        })
        .catch(error => reject(error));
});

export const getGameByID = (id) => new Promise((resolve, reject) => {
    Realm
        .open(databaseOptions)
        .then(realm => {
            const game = realm.objects('Game').filtered(`id == "${id}"`)[0];
            resolve(game);
        })
        .catch(error => reject(error));
});

export default new Realm(databaseOptions);