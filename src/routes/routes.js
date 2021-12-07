import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Footer from '..components/Footer/index.js';


const RouteList = () => {
   return(
       <BrowserRouter>
           <Route component = { Footer }  path="/" />
       </BrowserRouter>
   )
}

export default RouteList;