// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "xxxxxxxxxx-xxxxxxxxxxx",
  authDomain: "xxxx-xxxxxxxx-xxxxxxxx",
  projectId: "xxxxxxxx",
  storageBucket: "xxxxxx-xxxxxxxxx-xxxxxxxx",
  messagingSenderId: "xxxxxxxxx",
  appId: "xxxxxxx:xxxxxxxx:xxxxxxx:xxxxxxxxxxx",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
