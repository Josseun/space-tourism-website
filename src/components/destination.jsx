import React, { useState } from "react";
import Moon from "../assets/Image/image-moon.png";
import Mars from "../assets/Image/image-mars.png";
import Europa from "../assets/Image/image-europa.png";
import Titan from "../assets/Image/image-titan.png";

function Destination() {
  const DData = [
    {
      id: "0",
      Image: Moon,
      name: "Moon",
      content:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      time: " 3 days",
    },
    {
      id: "1",
      Image: Mars,
      name: "Mars",
      content:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: " 225 mil. km",
      time: "9 months",
    },
    {
      id: "2",
      Image: Europa,
      name: "Europa",
      content:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: " 628 mil. km",
      time: "3 years",
    },
    {
      id: "3",
      Image: Titan,
      name: "Titan",
      content:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      time: "7 years",
    },
  ];

  const [activebtn, setActiveBtn] = useState(0);

  const activebtnDestination = DData[activebtn];

  function DesktopLayout() {
    return (
      <div className="w-full h-full lg:block md:hidden ssm:hidden text-white">
        <div className="py-[35px] flex flex-col justify-between px-[160px] ">
          <div className="text-[28px] font-barlow-reg uppercase pb-[48px]">
            <span className="text-white/25">01</span> Pick your destination
          </div>
          <div className="flex justify-between">
            <div>
              <img
                src={activebtnDestination.Image}
                alt={activebtnDestination.name}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  {
    /* {DData.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    activebtn === index
                      ? "opacity-100 translate-x-0"
                      : index < activebtn
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="flex justify-between">
                    <div>
                      <img src={data.Image} alt="" />
                    </div>
                    <div className="w-[445px] h-full">
                      <div className="flex gap-10 w-full pb-[40px] uppercase font-barlow-reg">
                        <div onClick={() => setActiveBtn(0)}>Moon</div>
                        <div onClick={() => setActiveBtn(1)}>Mars</div>
                        <div onClick={() => setActiveBtn(2)}>Europa</div>
                        <div onClick={() => setActiveBtn(3)}>Titan</div>
                      </div>
                      <div>
                        {activebtn === index && (
                          <div>
                            <div className="text-[96px] pb-[16px] uppercase font-Bellefair-reg">
                              {data.name}
                            </div>
                            <div className="text-justify text-[18px] font-barlow-reg w-[350px]">
                              {data.content}
                            </div>
                            <hr className="my-[40px] text-white/25" />
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-[14px] font-barlow-reg">
                                  AVG. DISTANCE
                                </div>
                                <div className="text-[28px] font-Bellefair-reg">
                                  {data.distance}
                                </div>
                              </div>
                              <div>
                                <div className="text-[14px] font-barlow-reg">
                                  Est. travel time
                                </div>
                                <div>{data.time}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
 */
  }

  function TabletLayout() {
    return (
      <div className="w-full lg:hidden md:block ssm:hidden bg-cover">
        <div className="pt-5 mb-15 justify-between items-center flex ">
          hello
        </div>
      </div>
    );
  }

  function MobileLayout() {
    return (
      <div className="w-full lg:hidden md:hidden ssm:block bg-cover">
        <div className="pt-5 mb-15 justify-between items-center flex ">
          hello
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <DesktopLayout />
        <TabletLayout />
        <MobileLayout />
      </div>
    </div>
  );
}

export default Destination;
