import React, { useState } from "react";
import { Search } from "@material-ui/icons";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScrolled(window.scrollY !== 0);
      return () => (window.onscroll = null);
    };
  }

  const getNavbarClass = () => {
    if (isScrolled) {
      return "fixed bg-bgBlack text-white w-full z-50";
    }
    return "fixed bg-gradient-to-t from-transparent to-bgBlack text-white w-full z-50";
  };

  return (
    <div className={getNavbarClass()}>
      <div className="flex justify-between items-center px-5 h-20">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
            className="ml-10 mr-8"
            width={100}
            height={100}
          />
          <span className="cursor-pointer mr-4">Homepage</span>
          <span className="cursor-pointer mr-4">Experiences</span>
          <span className="cursor-pointer mr-4">Projects</span>
          <span className="cursor-pointer mr-4">Skills</span>
          <span className="cursor-pointer mr-4">Awards</span>
        </div>
        <div className="flex items-center">
          <Search className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
