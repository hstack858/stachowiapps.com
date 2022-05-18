import React from "react";
import Image from "next/image";

interface ListItemModalProps {
  image: string;
  title: string;
  blurb: string;
  dateRange: string;
  type: string;
  techStack?: string[];
  blurbBullets?: string[];
}

const ListItemModal: React.FC<ListItemModalProps> = ({
  image,
  title,
  blurb,
  dateRange,
  type,
  techStack,
  blurbBullets,
}) => {
  const renderBlurbBullets = () => {
    if (blurbBullets !== undefined) {
      return blurbBullets.map((bullet: string) => <li>{bullet}</li>);
    }
    return null;
  };

  const renderTechStack = () => {
    if (techStack !== undefined) {
      return techStack.map((bullet: string) => (
        <li className="ml-8">{bullet}</li>
      ));
    }
    return null;
  };

  return (
    <div className="list-item-modal bg-gray-500 flex flex-col">
      <div className="list-item-modal-image-wrapper h-1/2">
        <Image src={image} alt="" width={820} height={350} objectFit="cover" />
      </div>
      <div className="modal-info flex text-white mt-2 mx-8">
        <div className="mr-8">
          <div className="top-modal-info flex justify-start">
            <span>{title} </span>
            <span className="ml-8">{dateRange}</span>
            <span className="ml-8"> {type}</span>
          </div>
          <div className="modal-title mt-10 font-bold text-2xl">
            Beat The Book Inc.
          </div>
          <div className="flex mt-10">
            <div className="w-3/4 flex flex-col">
              <div>{blurb}</div>
              <div className="ml-8">
                <ul className="list-disc">{renderBlurbBullets()}</ul>
              </div>
            </div>

            <div className="w-1/4 flex flex-col items-center">
              <div>Tech Stack:</div>
              <ul className="list-disc ml-8">{renderTechStack()}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListItemModal;
