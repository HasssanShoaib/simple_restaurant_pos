import React from "react";
//import "../../node_modules/bootstrap/dist/css/bootstrap.css";
//import "../../node_modules/bootstrap/dist/css/bootstrap-theme.css";
import OverviewContainer from "../containers/OverviewContainer.js";
//import BootstrapNavbar from "./BootstrapNavbar";
import Body from "./Body.jsx";

const App = () => {
  return (
    <div>
     {/* <BootstrapNavbar /> */}
       <OverviewContainer />
      <Body/> 
    </div>
  );
};

export default App;
