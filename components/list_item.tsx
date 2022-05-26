import React from "react";
import Image from "next/image";
import { PlayArrow } from "@material-ui/icons";
import { Card } from "./constants/slider_data";
import styles from "./list_item.module.css";

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
      return <div className={styles.desc}>{blurb}</div>;
    }
    return <div />;
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={`${styles.listItem} group`}
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
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt=""
          width={750}
          height={400}
          layout="responsive"
        />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.icons}>
          <PlayArrow className={styles.icon} />
          <span className={styles.itemInfoTop}>
            <span>{role || title} </span>
            <span className={styles.date}>{dateRange}</span>
            <span> {type}</span>
          </span>
        </div>
        {renderBlurb()}
      </div>
    </div>
  );
};

export default ListItem;
