import React from "react";
import { Routes,Route } from "react-router";
import Home from "./Home"
import Sidebar from "./Sidebar"
const Main = () => (
   <> 
   <div>
   <Sidebar />
  {/* Overlay effect when opening sidebar on small screens */}
  <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />
  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{marginLeft: '300px', marginTop: '43px'}}>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    </div>
  </div>

   
    </>
);
export default Main;