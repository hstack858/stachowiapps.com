import React from "react";
import Image from "next/image";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import SocialNetworkTitle from "../public/static/social_network_title.png";
import styles from "./featured.module.css";

interface FeaturedProps {
  openModal: () => void;
}

const Featured: React.FC<FeaturedProps> = ({ openModal }) => (
  <div className={styles.featured}>
    <div className={styles.desktopFeatured}>
      <Image
        src={SocialNetworkTitle}
        alt=""
        width={100}
        height={50}
        layout="responsive"
      />
      <span className="my-4 text-lg">
        A young software engineer named Henry Stachowiak joins a sportsbetting
        social media startup. Will it actually become something? Only time will
        tell.
      </span>
      <div className={styles.buttons}>
        <button
          type="button"
          className="bg-white text-bgBlack flex py-3 px-6 rounded-lg border-r-1 items-center justify-center text-xl font-medium mr-2 cursor-pointer"
          onClick={openModal}
        >
          <PlayArrow />
          <span className="ml-1">Play</span>
        </button>
        <button
          type="button"
          className="bg-gray-600 text-white flex py-3 px-6 rounded-lg border-r-1 items-center justify-center text-xl font-medium mr-2 cursor-pointer"
          onClick={openModal}
        >
          <InfoOutlined />
          <span className="ml-1">Info</span>
        </button>
      </div>
    </div>
  </div>
);
export default Featured;
