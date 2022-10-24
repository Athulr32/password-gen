import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Mnemonic from "./components/Mneomic/Mnemonic";
import PasswordHome from "./components/Password/PasswordHome";


function App() {
  return (
    <div >

      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/generate" element={<Mnemonic/>}/>

          <Route path="/password" element={<PasswordHome/>}/>

        </Routes>

      


      </Router>

    </div>
  );
}

export default App;
