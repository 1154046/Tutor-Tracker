export const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyAxwEUpDqML4V1qSWZUtSL06eOYKp_fOQQ',
    authDomain: 'tutor-tracker-5acfd.firebaseapp.com',
    databaseURL: 'https://tutor-tracker-5acfd.firebaseio.com',
    projectId: 'tutor-tracker-5acfd',
    storageBucket: 'tutor-tracker-5acfd.appspot.com',
    messagingSenderId: '548452546567',
    appId: '1:548452546567:web:e2cbad60fd921676d252a2',
    measurementId: 'G-TFYSLMQKE7'
  };

export const snapshotToArray = snapshot => {
    const returnArray = [];
    snapshot.forEach(element => {
        const item = element.val();
        item.key = element.key;
        returnArray.push(item);
    });

    return returnArray;
};

