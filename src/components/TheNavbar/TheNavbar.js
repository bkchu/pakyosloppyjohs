import clsx from "clsx";
import { Link } from "gatsby";
import React, { useState } from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const links = [
  {
    text: "Our Story",
    to: "/our-story",
  },
  {
    text: "The Wedding",
    to: "/the-wedding",
  },
  {
    text: "Registry",
    to: "/registry",
  },
];

const TheNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileLinkClassNames = clsx("flex justify-end");

  const linkClassNames = clsx(
    "flex",
    "items-center",
    "justify-center",
    "ml-2",
    "first:ml-0"
  );

  return (
    <nav className="fixed w-screen font-display p-6 flex items-center justify-between z-50 bg-[#f5f5f5] shadow-lg h-24">
      <Heading h="h1" as="h1">
        <Link to="/">Sam & Grace</Link>
      </Heading>

      <Button
        variant="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="block lg:hidden z-20"
      >
        {isOpen ? (
          // x icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          // hamburger menu
        )}
      </Button>

      {/* mobile */}
      <ul
        className={` ${
          isOpen ? "absolute" : "hidden"
        } top-24 left-0 w-full p-3 bg-[#f5f5f5] lg:hidden z-10`}
      >
        {links.map((link) => (
          <li className={mobileLinkClassNames}>
            <Button variant="tertiary" to={link.to}>
              {link.text}
            </Button>
          </li>
        ))}
        <li className={clsx(mobileLinkClassNames, "py-4 pr-3")}>
          <Button>Livestream</Button>
        </li>
      </ul>

      {/* web */}
      <ul className="hidden lg:flex">
        {links.map((link) => (
          <li className={linkClassNames}>
            <Button variant="tertiary" to={link.to}>
              {link.text}
            </Button>
          </li>
        ))}
        <li className={linkClassNames}>
          <Button>Livestream</Button>
        </li>
      </ul>
    </nav>
  );
};

export default TheNavbar;
