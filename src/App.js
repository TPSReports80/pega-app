import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { StateContext, DispatchContext } from "./context/context";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import reducer from "./reducer/reducer";
import LoginForm from "./components/LoginForm";
import Signin from "./pages/Signin";
import ViewList from "./pages/ViewList";

const initialState = {
  isLogged: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const currentPage = () => {
    return state.isLogged ? (
      <div className="dashboard-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/view" element={<ViewList />} />
          </Routes>
        </main>
      </div>
    ) : (
      <LoginForm />
    );
  };
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="container">{currentPage()}</div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
