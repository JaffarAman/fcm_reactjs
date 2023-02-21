// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxxxxxxx-xxxxxxxxxxx",
  authDomain: "xxxx-xxxxxxxx-xxxxxxxx",
  projectId: "xxxxxxxx",
  storageBucket: "xxxxxx-xxxxxxxxx-xxxxxxxx",
  messagingSenderId: "xxxxxxxxx",
  appId: "xxxxxxx:xxxxxxxx:xxxxxxx:xxxxxxxxxxx",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export { messaging };

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
