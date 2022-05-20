import React from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

interface ListItemModalProps {
  open: boolean;
  setClosed: () => void;
  height: number;
  image: string;
  title: string;
  role?: string;
  blurb: string;
  dateRange: string;
  type: string;
  techStack?: string[];
  blurbBullets?: string[];
}

const ListItemModal: React.FC<ListItemModalProps> = ({
  open,
  setClosed,
  height,
  image,
  title,
  role,
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

  const getModalClass = () => {
    if (open) {
      return `shadow showModal`;
    }
    return "shadow hideModal";
  };

  return (
    <div
      className={getModalClass()}
      style={{
        transform: `translateY(${height})`,
      }}
      onClick={setClosed}
    >
      <div
        className="main-modal flex flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="list-item-modal-image-wrapper h-1/2">
          <Image
            src={image}
            alt=""
            width={820}
            height={350}
            objectFit="cover"
          />
          <CloseIcon className="modal-close" onClick={setClosed} />
        </div>
        <div className="modal-info flex text-white mx-8">
          <div className="mr-8">
            <div className="top-modal-info flex justify-start">
              <span>{role} </span>
              <span className={`${role ? "ml-8" : ""}`}>{dateRange}</span>
              <span className="ml-8"> {type}</span>
            </div>
            <div className="modal-title mt-10 font-bold text-2xl">{title}</div>
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
    </div>
  );
};
export default ListItemModal;
