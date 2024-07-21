// // Home.js
// import {
//   Disclosure,
//   DisclosureButton,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import {
//   Bars3Icon,
//   BellIcon,
//   MagnifyingGlassIcon,
//   ViewfinderCircleIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import Sidebar from "./Sidebar";
// import { useState } from "react";

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
// const userNavigation = [
//   { name: "Your Profile", href: "#" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-full grid grid-cols-12 bg-[#fffffe] text-[#232323]">
//       <Sidebar isOpen={sidebarOpen} />

//       <Disclosure as="div" className="col-span-12">
//         {({ open }) => (
//           <>
//             <div className="py-2 px-4 sm:px-6 lg:px-8">
//               <div className="flex h-16 items-center justify-between">

//               </div>
//             </div>

//             <Disclosure.Panel className="md:hidden">
//               <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//                 {navigation.map((item) => (
//                   <DisclosureButton
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     aria-current={item.current ? "page" : undefined}
//                     className={classNames(
//                       item.current
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "block rounded-md px-3 py-2 text-base font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </DisclosureButton>
//                 ))}
//               </div>
//               <div className="border-t border-gray-700 pb-3 pt-4">
//                 <div className="flex items-center px-5">
//                   <div className="flex-shrink-0">
//                     <img
//                       alt=""
//                       src={user.imageUrl}
//                       className="h-10 w-10 rounded-full"
//                     />
//                   </div>
//                   <div className="ml-3">
//                     <div className="text-base font-medium leading-none text-white">
//                       {user.name}
//                     </div>
//                     <div className="text-sm font-medium leading-none text-gray-400">
//                       {user.email}
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                   >
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">View notifications</span>
//                     <BellIcon aria-hidden="true" className="h-6 w-6" />
//                   </button>
//                 </div>
//                 <div className="mt-3 space-y-1 px-2">
//                   {userNavigation.map((item) => (
//                     <DisclosureButton
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                     >
//                       {item.name}
//                     </DisclosureButton>
//                   ))}
//                 </div>
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>

//       <header className="bg-white shadow col-span-12">
//         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900">
//             Dashboard
//           </h1>
//         </div>
//       </header>
//       <main className="col-span-12">
//         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//           {/* Your content */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="grid grid-cols-12">
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} />
      <MainContainer sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Home;
