import React, { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  ViewfinderCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const Navbar = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="col-span-12 sm:grid grid-cols-12 gap-4 items-center p-4 flex justify-between">
      <div className="flex gap-4 col-span-2 items-center">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen((curState) => !curState)}
          className="group relative hidden md:inline-flex items-center justify-center rounded-md p-2 text-gray-400   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-8 w-8 block" />
          {/* <XMarkIcon
            aria-hidden="true"
            className={`block h-6 w-6 ${sidebarOpen ? "block" : "hidden"}`}
          /> */}
        </button>
        <div className="flex-shrink-0 flex items-center space-x-2">
          <ViewfinderCircleIcon className="h-8 w-8 text-[#f45d48]" />
          <h1 className="text-2xl text-[#f45d48]">Focus</h1>
        </div>
      </div>
      <div className="hidden sm:flex items-center col-start-5 col-end-9">
        <input
          type="text"
          className="flex-grow p-2 pl-4 rounded-l-full border border-gray-500 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="button"
          className="relative rounded-r-full p-2 text-gray-400 border border-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Search for videos</span>
          <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="block -col-start-1">
        <div className="ml-4 flex items-center space-x-4">
          <button
            type="button"
            className="relative revert sm:hidden rounded-full p-2 text-gray-400 border border-gray-500  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Search for videos</span>
            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
          </button>

          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="relative flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src={user.imageUrl}
                className="h-8 w-8 rounded-full"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {userNavigation.map((item) => (
                <MenuItem key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    {item.name}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
