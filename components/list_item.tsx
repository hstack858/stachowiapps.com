import React from "react";
import Image from "next/image";
import { PlayArrow } from "@material-ui/icons";
import { Card } from "./constants/slider_data";

interface ListItemProps {
  image: string;
  title: string;
  role: string;
  blurb: string;
  dateRange: string;
  type: string;
  setOpen: () => void;
  setModal: (card: Card) => void;
  // eslint-disable-next-line react/require-default-props
  techStack?: string[];
  // eslint-disable-next-line react/require-default-props
  blurbBullets?: string[];
}

// eslint-disable-next-line react/function-component-definition
const ListItem: React.FC<ListItemProps> = ({
  image,
  title,
  role,
  blurb,
  dateRange,
  type,
  setOpen,
  setModal,
  techStack,
  blurbBullets,
}) => {
  const renderBlurb = () => {
    if (blurb !== null) {
      return <div className="desc">{blurb}</div>;
    }
    return <div />;
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className="list-item group"
      onClick={() => {
        setModal({
          image,
          title,
          role,
          blurb,
          dateRange,
          type,
          techStack,
          blurbBullets,
        });
        setOpen();
      }}
    >
      <div className="image-wrapper">
        <Image
          src={image}
          alt=""
          className="card-image"
          width={750}
          height={400}
          layout="responsive"
        />
      </div>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon" />
          <span className="itemInfoTop">
            <span>{role || title} </span>
            <span className="date">{dateRange}</span>
            <span> {type}</span>
          </span>
        </div>
        {renderBlurb()}
      </div>
    </div>
  );
};

export default ListItem;
