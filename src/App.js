import "./App.css";
import logo from "./logo.svg";
import TopBar from "./components/Topbar";

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <>
      <TopBar />
      <div className="App">
        <header className="App-header">
          <View className="App">
            <Card>
              
              <Heading level={1}> Autenticación Correcta</Heading>
            </Card>
            <Button onClick={signOut}>Salir</Button>
          </View>

          <div className="">
            <button
              onClick={() => {
                console.log("click");
              }}
              style={{
                backgroundColor: "#0000ff",
                color: "#fff",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1.2rem",
                transition: "all 0.2s ease-in-out",
                position: "absolute",
                top: "65px",
                right: "10px",
              }}
            >
              {" "}
              + nueva{" "}
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default withAuthenticator(App);
