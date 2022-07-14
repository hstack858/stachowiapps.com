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
  techStack?: string[];
  blurbBullets?: string[];
  id: number;
}

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
  id,
}) => {
  const renderBlurb = () => {
    if (blurb !== null) {
      return <div className={styles.desc}>{blurb}</div>;
    }
    return <div />;
  };

  const isWhite = () => {
    switch (id) {
      case 12:
        return true;
      case 14:
        return true;
      case 16:
        return true;
      default:
        return false;
    }
  };

  return (
    <div
      role="listbox"
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
          id,
        });
        setOpen();
      }}
    >
      <div
        className={`${styles.imageWrapper} ${isWhite() ? styles.white : ""}`}
      >
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
