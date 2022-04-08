import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import Sitebar from "./component/Sitebar";
import Template from "./component/Template";
import Addlink from "./component/Addlink";
import Mylink from "./component/Mylink";
import Myaccount from "./component/Myaccount";
import Priviewlink from "./component/Priviewlink";

function App() {
  return (
    <div className="container-fruit">
      {/* <Home /> */}
      {/* <Template /> */}
      <Addlink />
      {/* <Mylink /> */}
      {/* <Myaccount /> */}
      {/* <Priviewlink /> */}
    </div>
  );
}

export default App;
