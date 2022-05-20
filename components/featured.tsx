import React from "react";
import Image from "next/image";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import SocialNetwork from "../public/static/social_network.webp";
import SocialNetworkTitle from "../public/static/social_network_title.png";

interface FeaturedProps {
  openModal: () => void;
}

// eslint-disable-next-line react/function-component-definition
const Featured: React.FC<FeaturedProps> = ({ openModal }) => (
  <div className="featured">
    <div className="flex flex-col w-1/3 absolute left-20 bottom-40 text-white">
      <Image
        src={SocialNetworkTitle}
        alt=""
        width={100}
        height={50}
        layout="responsive"
      />
      <span className="my-4 text-lg">
        A college junior named Henry Stachowiak starts a sports betting site
        with his genius roommate and faces the reality of greedy CEOs and
        investors. What will happen to the currently worthless shares he was
        given in exchange for almost a year of building the frontend basically
        alone?
      </span>
      <div className="flex">
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
