import React from "react";
import BGHD from "../assets/Image/background-destination-desktop.jpg";
import BGHT from "../assets/Image/background-destination-tablet.jpg";
import BGHM from "../assets/Image/background-destination-mobile.jpg";
import { Route, Routes } from "react-router-dom";
import Nav from "./nav";

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
      <div
        className="lg:block md:hidden ssm:hidden bg-cover"
        style={{ backgroundImage: `url(${BGHD})`, height: "1024px" }}
      >
        <Nav />
      </div>
      <div
        className="w-full h-[868px] lg:hidden md:block ssm:hidden bg-cover"
        style={{ backgroundImage: `url(${BGHT})` }}
      >
        <Nav />
      </div>
      <div
        className="w-full h-full lg:hidden md:hidden ssm:block bg-cover"
        style={{ backgroundImage: `url(${BGHM})` }}
      >
        <Nav />
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
