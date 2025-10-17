import React from "react";
import { Route, Routes } from "react-router-dom";
import Destination from "./destination";
import Home from "./home";

// // Desktop imports
// import Home from "./Home";

// import DestinationD from "./destination";

// // Tablet imports
// import NavT from "./Tablet/nav";
// import HeroT from "./Tablet/hero";
// import DestinationT from "./Tablet/destination";

// // Mobile imports
// import NavM from "./Mobile/nav";
// import HeroM from "./Mobile/hero";
// import DestinationM from "./Mobile/destination";

function Main() {
  return (
    <>
      <div>
        <Home />
        <Destination />
      </div>
    </>
  );
}

export default Main;

// function DesktopLayout() {
//   return (

//   );
// }

// function TabletLayout() {
//   return (

//   );
// }

// function MobileLayout() {
//   return (

//   );
// }

//  <div>
//       <DesktopLayout />
//       <TabletLayout />
//       <MobileLayout />
//     </div>
