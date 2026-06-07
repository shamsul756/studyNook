"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Rooms", path: "/allroom" },
    { name: "Add Room", path: "/add-room" },
    { name: "My Listing", path: "/my-listing" },
    { name: "My Booking", path: "/my-booking" },
  ];

  const handleProfileAction = (action) => {
    setProfileOpen(false);

    if (action === "profile") router.push("/profile");
    if (action === "booking") router.push("/my-booking");
    if (action === "listing") router.push("/my-listing");
    if (action === "logout") {
      console.log("logout clicked");
    }
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="Logo"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3 relative">

            {/* PROFILE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Profile
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => handleProfileAction("profile")}
                    className="w-full text-black text-left px-4 py-2 hover:bg-gray-300"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => handleProfileAction("booking")}
                    className="w-full text-black text-left px-4 py-2 hover:bg-gray-300"
                  >
                    My Booking
                  </button>

                  <button
                    onClick={() => handleProfileAction("listing")}
                    className="w-full text-black text-left px-4 py-2 hover:bg-gray-300"
                  >
                    My Listing
                  </button>

                  <button
                    onClick={() => handleProfileAction("logout")}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="/profile"
              className="text-center px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Profile
            </Link>

            <Link
              href="/login"
              className="text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="text-center px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
