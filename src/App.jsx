import React, { useState } from "react";
import LoginPage from "./pages/Login/LoginPage";
import WelcomeMessage from "./pages/Login/WelcomeMessage";
import PinPage from "./pages/Login/PinPage";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { ReviewPage } from "./pages/Review/ReviewPage";
import { BuyPage } from "./pages/Buy/BuyPage";
import { ShellPage } from "./pages/Shell/ShellPage";
import { DepositPage } from "./pages/Deposit/DepositPage";
import { GeneratePage } from "./pages/Generate/GeneratePage";
import { stockData, getStockData } from "./pages/Review/getStockData";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [userFunds, setUserFunds] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [pinEntered, setPinEntered] = useState(false);

  const handleLogin = (enteredName, enteredUsername) => {
    const user = stockData.find(user => user.name === enteredName && user.username === enteredUsername);

    if (user) {
      setName(user.name);
      setUsername(user.username);
      setAuthenticated(true);
    } else {
    }
  };

  const handlePinSubmit = () => {
    setPinEntered(true);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {authenticated && !pinEntered ? (
              <>
                <WelcomeMessage name={name} />
                <PinPage onPinSubmit={handlePinSubmit} stockData={stockData}/>
              </>
            ) : authenticated && pinEntered ? (
              <Redirect to="/dashboard" />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )}
          </Route>
          <Route path="/dashboard">
            <Navbar />
            <div style={{ marginTop: "130px" }}>
              <DashboardPage />
            </div>
          </Route>
          <Route path="/review">
          <Navbar />
            <div style={{ marginTop: "130px" }}>
              <ReviewPage />
            </div>
          </Route>       
          <Route path="/buy">
          <Navbar />
            <div style={{ marginTop: "130px" }}>
              <BuyPage />
            </div>
          </Route>
          <Route path="/shell">
          <Navbar />
            <div style={{ marginTop: "130px" }}>
              <ShellPage />
            </div>
          </Route>  
          <Route path="/deposit">
          <Navbar />
            <div style={{ marginTop: "130px" }}>
              <DepositPage />
            </div>
          </Route>  
          <Route path="/generate">
          <Navbar />
            <div style={{ marginTop: "130px" }}>
              <GeneratePage 
              name={name}
              username={username}
              userFunds={userFunds}/>
           </div>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
