import './App.css';
import CharactersList from './pages/CharactersList';
import { Route, Routes} from "react-router-dom";
import Character from './pages/Character';
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "../src/Auth/Login"
function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route  exact path="/home" element={<CharactersList/>} />
          <Route  exact path="/:id" element={<Character/>} />
          <Route
        path="/"
        element={
          <Auth0Provider
            domain="dev-t7uorqjf.us.auth0.com"
            clientId="tt8OMw1akDcwBSX9O2KYJ6wxpp3OivQA"
            redirectUri="http://localhost:3000/home"
          >
            <div style={{ paddingLeft: "500px", paddingTop: "200px" }}>
              <Login />
            </div>
          </Auth0Provider>
        }
      />
      </Routes>
    </div>
  );
}

export default App;
