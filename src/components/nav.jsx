import { useState } from "react";
import Logo from "../assets/Image/logo.svg";
import { Link } from "react-router-dom";
import Hamburger from "../assets/Image/icon-hamburger.svg";
import Close from "../assets/Image/icon-close.svg";

function Nav() {
  function DesktopLayout() {
    return (
      <div className="lg:block md:hidden ssm:hidden">
        <div className=" pt-5 flex justify-between items-center ">
          <div className="pl-10">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex w-3xl justify-end gap-10 items-center pl-10 pr-4 py-6 bg-white/5 backdrop-blur uppercase">
            <Link
              to=""
              className="text-white tracking-widest text-[16px] font-light"
            >
              Home
            </Link>
            <div>
              <Link
                className="text-white tracking-widest text-[16px] font-light"
                to="/destination"
              >
                Destination
              </Link>
            </div>
            <Link
              to=""
              className="text-white tracking-widest text-[16px] font-light"
            >
              Crew
            </Link>
            <Link
              to=""
              className="text-white tracking-widest text-[16px] font-light"
            >
              Technology
            </Link>
          </div>
        </div>
      </div>
    );
  }

  function TabletLayout() {
    return (
      <div className="w-full lg:hidden md:block ssm:hidden ">
        <div className="pt-5 justify-between items-center flex ">
          <div className="pl-10">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="w-xl flex justify-end gap-10 items-center pl-8 pr-4 py-10 bg-white/5 backdrop-blur uppercase">
            <Link
              to=""
              className="text-white tracking-widest text-[16px] w-full font-light"
            >
              Home
            </Link>
            <Link
              to=""
              className="text-white tracking-widest text-[16px] w-full font-light"
            >
              Destination
            </Link>
            <Link
              to=""
              className="text-white tracking-widest text-[16px] w-full font-light"
            >
              Crew
            </Link>
            <Link
              to=""
              className="text-white tracking-widest text-[16px] w-full font-light"
            >
              Technology
            </Link>
          </div>
        </div>
      </div>
    );
  }

  function MobileLayout() {
    const [toggle, setToggle] = useState(false);

    return (
      <div className="w-full lg:hidden md:hidden ssm:block ">
        <div className="relative">
          <div className="flex justify-between items-center p-5">
            <div className="pl-10">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="z-10">
              {toggle ? (
                <img src={Close} alt="" onClick={() => setToggle(false)} />
              ) : (
                <img src={Hamburger} alt="" onClick={() => setToggle(true)} />
              )}
            </div>
          </div>

          <div className="absolute top-0 right-0 w-70w ">
            {toggle ? (
              <div className="flex flex-col justify-center w-full h-screen gap-10 px-10 py-6 bg-blue-300/10 backdrop-blur uppercase">
                <Link
                  to=""
                  className="text-white tracking-widest text-[16px] w-full font-light "
                >
                  00 Home
                </Link>
                <Link
                  to=""
                  className="text-white tracking-widest text-[16px] w-full font-light"
                >
                  01 Destination
                </Link>
                <Link
                  to=""
                  className="text-white tracking-widest text-[16px] w-full font-light"
                >
                  02 Crew
                </Link>
                <Link
                  to=""
                  className="text-white tracking-widest text-[16px] w-full font-light"
                >
                  03 Technology
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <DesktopLayout />
        <TabletLayout />
        <MobileLayout />
      </div>
    </>
  );
}

export default Nav;
