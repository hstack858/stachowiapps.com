import React from "react";
import Image from "next/image";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import PlayArrow from "@mui/icons-material/PlayArrow";
import styles from "./featured.module.css";

interface FeaturedProps {
  openModal: () => void;
}

const Featured: React.FC<FeaturedProps> = ({ openModal }) => (
  <div className={styles.featured}>
    <div className={styles.desktopFeatured}>
      <Image
        src="https://netflix-site.s3.us-east-1.amazonaws.com/static/social_network_title.png"
        alt="social network title"
        width={100}
        height={50}
        layout="responsive"
        priority
        quality={90}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
      <span className="my-4 text-lg">
        A young software engineer named Henry Stachowiak is back on the job
        hunt. Where will he end up working? Only time will tell...
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
export default React.memo(Featured);
