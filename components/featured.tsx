import React from "react";
import Image from "next/image";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import SocialNetworkTitle from "../public/static/social_network_title.png";

interface FeaturedProps {
  openModal: () => void;
}

// eslint-disable-next-line react/function-component-definition
const Featured: React.FC<FeaturedProps> = ({ openModal }) => (
  <div className="featured">
    <div className="desktop-featured">
      <Image
        src={SocialNetworkTitle}
        alt=""
        width={100}
        height={50}
        layout="responsive"
      />
      <span className="my-4 text-lg">
        A college junior named Henry Stachowiak starts a sports betting site
        with his genius roommate and faces the reality venture capital sharks.
        What will happen to the shares he earned as the frontend lead?
      </span>
      <div className="buttons flex">
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
