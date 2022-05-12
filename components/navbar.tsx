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

  const scrollToId = (id: string) => {
    const anchor = document.querySelector(`#${id}`);
    if (anchor !== null) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      console.log(id, ": can't smooth scroll");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          <span className="cursor-pointer mr-4" onClick={scrollToTop}>
            Home
          </span>
          <span
            className="cursor-pointer mr-4"
            onClick={() => scrollToId("Skills")}
          >
            Skills
          </span>
          <span
            className="cursor-pointer mr-4"
            onClick={() => scrollToId("Experiences")}
          >
            Experiences
          </span>
          <span
            className="cursor-pointer mr-4"
            onClick={() => scrollToId("Projects")}
          >
            Projects
          </span>
          <span
            className="cursor-pointer mr-4"
            onClick={() => scrollToId("Awards")}
          >
            Awards/Certifications
          </span>
        </div>
        <div className="flex items-center">
          <Search className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
