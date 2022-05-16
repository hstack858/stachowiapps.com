import React from "react";
import Image from "next/image";
import { PlayArrow } from "@material-ui/icons";

interface ListItemProps {
  image: string;
  title: string;
  blurb?: string;
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
  const renderBlurb = () => {
    if (blurb !== null) {
      return <div className="desc">{blurb}</div>;
    }
    return <div />;
  };

  console.log(title, image);
  return (
    <div className="list-item group">
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
      <div className="itemInfo invisible">
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
ListItem.defaultProps = {
  blurb: "",
};
export default ListItem;
