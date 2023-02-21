import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging, onMessageListener } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
// import "./firebase-messaging-sw";

function App() {
  useEffect(() => {
    // Add the public key generated from the console here.
    function requestPermission() {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
          getToken(messaging, {
            vapidKey: "xxxxxxxxxx-xxxxxxx-xxxxx",
          })
            .then((token) => {
              console.log("token", token);
            })
            .catch((err) => {
              console.log("error", err);
            });
        } else {
          console.log("Notification permission denied.");
        }
      });
    }
    requestPermission();
    onMessageListener()
      .then((payload) => {
        console.log(payload.notification.body, "payload notification");
        toast.success(payload.notification.body, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
