import React from "react";
import TheNavbar from "../components/TheNavbar/TheNavbar";

const TheNavigationLayout = ({ children }) => {
  return (
    <>
      <TheNavbar />
      <main className="py-24">
        <div className="col-start-2 col-span-10">{children}</div>
      </main>
    </>
  );
};

export default TheNavigationLayout;
