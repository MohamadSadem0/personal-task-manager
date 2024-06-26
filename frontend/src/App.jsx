import "./App.css";
import { Provider } from "react-redux";
import store from "./store"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Authentication/index";
import Home from "./Pages/Home/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
