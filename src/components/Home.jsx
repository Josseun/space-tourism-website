import React from "react";
import BGHD from "./Image/image-moon.png";
import NavD from "./nav";
import HeroD from "./hero";

function Home() {
  return (
    <div
      className="w-full min-h-screen lg:block md:hidden ssm:hidden bg-cover"
      style={{ backgroundImage: `url(${BGHD})` }}
    >
      <NavD />
      <HeroD />
    </div>
  );
}

export default Home;


