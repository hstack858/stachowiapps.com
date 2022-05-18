import React, { useState } from "react";
import Image from "next/image";
import { PlayArrow } from "@material-ui/icons";

interface ListItemProps {
  image: string;
  title: string;
  blurb: string;
  dateRange: string;
  type: string;
}

// eslint-disable-next-line react/function-component-definition
const ListItem: React.FC<ListItemProps> = ({
  image,
  title,
  blurb,
  dateRange,
  type,
}) => {
  const [style, setStyle] = useState("list-item group");

  const renderBlurb = () => {
    if (blurb !== null) {
      return <div className="desc">{blurb}</div>;
    }
    return <div />;
  };

  const openModal = () => {
    setStyle("list-item-modal");
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={style}
      // onClick={() => {
      //   openModal();
      // }}
    >
      <div className="image-wrapper">
        <Image
          src={image}
          alt=""
          className="card-image"
          width={700}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon" />
          <span className="itemInfoTop">
            <span>{title} </span>
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
