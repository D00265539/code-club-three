"use client";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible((mobileMenuVisible) => !mobileMenuVisible);
  };

  return (
    <>
      <nav className="bg-green-400">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <Image
              src="/images/code_club_logo.jpg"
              alt="Code Club Logo"
              className="h-12 rounded-xl float-left"
              width={50}
              height={50}
            />
          </div>
          <div>
            <a href="/" className="flex items-center">
              <h1 className="self-center text-2xl font-bold">DKIT Code Club</h1>
            </a>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars />
          </button>

          <div
            className={
              (mobileMenuVisible ? "" : "hidden ") + "w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0">
              <NavLink title="Index" link="/" />
              <NavLink title="Scratch" link="/scratch" />
              <NavLink title="Python" link="/python" />
              <NavLink title="Web" link="/web" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
