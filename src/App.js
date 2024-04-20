import Home from "./pages/home/Home";
import {
    BrowserRouter, Navigate,
    Route, Routes,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {productInputs, userInputs} from "./formSource";
import "./style/dark.scss"
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import {authContext} from "./context/authContext";

function App() {

  const {darkMode} = useContext(DarkModeContext);

  const {currentUser} = useContext(authContext)

  const RequireAuth = ({children}) => {
      return currentUser ? (children) : <Navigate to={"/login"}/>
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
          <Routes>
              <Route path="/">
                  <Route path="login" element={<Login/>}></Route>
                  <Route index element={<RequireAuth><Home/></RequireAuth>}></Route>
                  <Route path="users">
                      <Route index element={<RequireAuth><List title={"Add New User"} path={"/users/new"}/></RequireAuth>}></Route>
                      <Route path=":userID" element={<RequireAuth><Single/></RequireAuth>}></Route>
                      <Route path="new" element={<RequireAuth><New inputs={userInputs} title={"Add New User"}/></RequireAuth>}></Route>
                  </Route>
                  <Route path="products">
                      <Route index element={<RequireAuth><List title={"Add New Product"} path={"/products/new"}/></RequireAuth>}></Route>
                      <Route path=":productID" element={<RequireAuth><Single/></RequireAuth>}></Route>
                      <Route path="new" element={<RequireAuth><New inputs={productInputs} title={"Add New Product"}/></RequireAuth>}></Route>
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
