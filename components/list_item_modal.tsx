import React from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./list_item_modal.module.css";

interface ListItemModalProps {
  open: boolean;
  setClosed: () => void;
  image: string;
  title: string;
  // eslint-disable-next-line react/require-default-props
  role?: string;
  blurb: string;
  dateRange: string;
  type: string;
  // eslint-disable-next-line react/require-default-props
  techStack?: string[];
  // eslint-disable-next-line react/require-default-props
  blurbBullets?: string[];
}

// eslint-disable-next-line react/function-component-definition
const ListItemModal: React.FC<ListItemModalProps> = ({
  open,
  setClosed,
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
      // eslint-disable-next-line react/jsx-key
      return blurbBullets.map((bullet: string) => <li>{bullet}</li>);
    }
    return null;
  };

  const renderTechStack = () => {
    if (techStack !== undefined) {
      return techStack.map((bullet: string) => (
        // eslint-disable-next-line react/jsx-key
        <li className="ml-8">{bullet}</li>
      ));
    }
    return null;
  };

  const getModalClass = () => {
    if (open) {
      return `${styles.shadow} ${styles.showModal}`;
    }
    return `${styles.shadow} ${styles.hideModal}`;
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={getModalClass()} onClick={setClosed}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.listItemModalImageWrapper}>
          <Image
            src={image}
            alt=""
            width={670}
            height={320}
            layout="responsive"
          />
          <CloseIcon className={styles.modalClose} onClick={setClosed} />
        </div>
        <div className={styles.modalInfo}>
          <div className="mr-8">
            <div className="top-modal-info flex justify-start">
              <span>{role} </span>
              <span className={`${role ? "ml-8" : ""}`}>{dateRange}</span>
              <span className="ml-8"> {type}</span>
            </div>
            <div className="mt-10 font-bold text-2xl">{title}</div>
            <div className={`${styles.modalTextInfo} flex mt-10`}>
              <div className={styles.modalDesc}>
                <div>{blurb}</div>
                <div className="ml-8">
                  <ul>{renderBlurbBullets()}</ul>
                </div>
              </div>
              {techStack === undefined ? null : (
                <div className={styles.techStack}>
                  <div>Tech Stack:</div>
                  <ul className="ml-8">{renderTechStack()}</ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListItemModal;
