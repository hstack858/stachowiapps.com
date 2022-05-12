import React from "react";
import Image from "next/image";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import Ozark from "../public/static/ozarkBackground.webp";
import OzarkTitle from "../public/static/ozarkTitle.webp";

const Featured: React.FC = () => (
  <div className="h-screen relative">
    <Image
      src={Ozark}
      alt=""
      width={100}
      height={50}
      layout="responsive"
      objectFit="cover"
    />
    <div className="flex flex-col w-1/3 absolute left-20 bottom-40 text-white">
      <Image
        src={OzarkTitle}
        alt=""
        width={100}
        height={50}
        layout="responsive"
        ob
      />
      <span className="my-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
        nulla odio optio quisquam quos sapiente unde voluptatibus? Blanditiis
        nisi nulla vero. Fuga illum iure nam natus perspiciatis sapiente sed
        unde.
      </span>
      <div className="flex">
        <button
          type="button"
          className="bg-white text-bgBlack flex py-3 px-6 rounded-lg border-r-1 items-center justify-center text-xl font-medium mr-2 cursor-pointer"
        >
          <PlayArrow />
          <span className="ml-1">Play</span>
        </button>
        <button
          type="button"
          className="bg-gray-600 text-white flex py-3 px-6 rounded-lg border-r-1 items-center justify-center text-xl font-medium mr-2 cursor-pointer"
        >
          <InfoOutlined />
          <span className="ml-1">Info</span>
        </button>
      </div>
    </div>
  </div>
);
export default Featured;
