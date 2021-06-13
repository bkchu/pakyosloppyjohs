import React from "react";
import TheNavbar from "../components/TheNavbar/TheNavbar";
import Seo from "../components/SEO/SEO";
const TheNavigationLayout = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      <TheNavbar />
      <main className="pt-24 w-full">
        <div className="col-start-2 col-span-10 w-full">{children}</div>
      </main>
    </>
  );
};

export default TheNavigationLayout;
