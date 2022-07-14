import React, { useState } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import Henflix from "../public/static/henflix.png";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScrolled(window.scrollY !== 0);
      window.onscroll = null;
    };
  }

  const getNavbarClass = () => {
    if (isScrolled) {
      return `${styles.navbar} fixed bg-bgBlack text-white w-full z-50`;
    }
    return `${styles.navbar} fixed bg-gradient-to-t from-transparent to-bgBlack text-white w-full z-50`;
  };

  const scrollToId = (id: string) => {
    const anchor = document.querySelector(`#${id}`);
    if (anchor !== null) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
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
          <Image
            src={Henflix}
            alt=""
            className="ml-12 mr-16"
            width={100}
            height={100}
          />
          <span className="cursor-pointer mr-4 ml-4">
            <button type="button" onClick={scrollToTop}>
              Home
            </button>
          </span>
          <span className="cursor-pointer mr-4">
            <button type="button" onClick={() => scrollToId("Experiences")}>
              Experiences
            </button>
          </span>
          <span className="cursor-pointer mr-4">
            <button type="button" onClick={() => scrollToId("Projects")}>
              Projects
            </button>
          </span>
          <span className="cursor-pointer mr-4">
            <button type="button" onClick={() => scrollToId("Skills")}>
              Skills
            </button>
          </span>
          <span className="cursor-pointer mr-4">
            <button type="button" onClick={() => scrollToId("Awards")}>
              Awards/Certifications
            </button>
          </span>
        </div>
        <div className="flex justify-center">
          <span className="cursor-pointer mr-4">
            <GitHubIcon className="mr-2" />
            <button type="button">
              <a href="https://github.com/hstack858">GitHub</a>
            </button>
          </span>
          <span className="cursor-pointer mr-4">
            <LinkedInIcon className="mr-2" />
            <button type="button">
              <a href="https://www.linkedin.com/in/henry-stachowiak/">
                LinkedIn
              </a>
            </button>
          </span>
          <span className="cursor-pointer mr-4">
            <ArticleIcon className="mr-2" />
            <button type="button">
              <a
                href="https://netflix-site.s3.amazonaws.com/static/Screen+Shot+2022-07-13+at+10.39.31+PM.png"
                download
              >
                Resume
              </a>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
