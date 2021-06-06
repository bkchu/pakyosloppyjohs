import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
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
  const linkClassNames = clsx(
    "flex",
    "items-center",
    "justify-center",
    "ml-6",
    "first:ml-0"
  );

  return (
    <nav className="fixed w-screen font-display p-6 flex items-center justify-between z-50 bg-[#f5f5f5] shadow-lg">
      <h2 className="text-5xl font-serif font-bold text-text">
        <Link to="/">Sam & Grace</Link>
      </h2>
      <ul className="flex">
        {links.map((link) => (
          <li className={linkClassNames}>
            <a href={link.to}>
              <Heading h="eyebrow">{link.text}</Heading>
            </a>
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
