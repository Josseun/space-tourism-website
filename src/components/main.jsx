import React from "react";
import { Route, Routes } from "react-router-dom";
import Destination from "./destination";
import Home from "./home";
import Crew from "./crew";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="" element={<Crew />} />
          <Route path="" element={< />} />
        </Routes>
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
