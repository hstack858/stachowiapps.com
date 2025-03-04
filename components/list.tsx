import React, { useEffect, useRef, useState, useMemo } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "./list_item";
import {
  experiences,
  projects,
  skills,
  awards,
  Card,
} from "./constants/slider_data";
import convertPixelsToRem from "../utils/pixels_to_rem";
import styles from "./list.module.css";

interface ListProps {
  title: string;
  setOpen: () => void;
  modalOpen: boolean;
  setModal: (card: Card) => void;
}

const List: React.FC<ListProps> = ({ title, setOpen, modalOpen, setModal }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [slideNum, setSlideNum] = useState(0);
  const [arrowDisabled, setArrowDisabled] = useState(false);

  // Map titles to their respective data arrays with proper typing
  const titleToDataMap = useMemo(() => ({
    "Experiences": experiences,
    "Skills": skills,
    "Awards/Certifications": awards,
    "Projects": projects
  } as Record<string, Card[]>), []);

  // Use a stable reference for cards based on title
  const stableCards = useMemo(() => {
    const dataArray = titleToDataMap[title] || [];
    // Create a deep clone to prevent any reference issues
    return JSON.parse(JSON.stringify(dataArray)).sort((a: Card, b: Card) => a.id - b.id);
  }, [title, titleToDataMap]);
  
  // Update cards state only once on mount or title change
  useEffect(() => {
    setCards(stableCards);
  }, [stableCards]);

  const getCardNumPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1819) {
      return 8;
    }
    if (screenWidth > 1590) {
      return 7;
    }
    if (screenWidth > 1361) {
      return 6;
    }
    if (screenWidth > 1130) {
      return 5;
    }
    if (screenWidth > 895) {
      return 4;
    }
    if (screenWidth > 668) {
      return 3;
    }
    if (screenWidth > 439) {
      return 2;
    }
    return 2;
  };

  const listRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    let adder = 0;
    if (window.innerWidth > 470) {
      adder = 14.375;
    } else {
      adder = 9.59;
    }

    setArrowDisabled(true);
    let rect = 0;
    if (listRef.current) {
      rect = listRef.current.getBoundingClientRect().x - 50;
    }
    const distance = convertPixelsToRem(rect);
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      if (listRef.current) {
        listRef.current.style.transform = `translateX(${adder + distance}rem)`;
      }
    } else {
      const cardsPerRow = getCardNumPerRow();
      if (direction === "right" && slideNum < cards.length - cardsPerRow) {
        setSlideNum(slideNum + 1);
        if (listRef.current) {
          listRef.current.style.transform = `translateX(${-adder + distance}rem)`;
        }
      }
    }
  };

  setTimeout(() => {
    setArrowDisabled(false);
  }, 500);

  const getId = () => {
    if (title === "Awards/Certifications") {
      return "Awards";
    }
    return title;
  };

  return (
    <div id={getId()} className={styles.list}>
      <span className={styles.listTitle}>{title}</span>
      <div className={styles.wrapper}>
        {modalOpen ? null : (
          <ArrowBackIosNewOutlinedIcon
            className={`${styles.sliderArrow} ${styles.left}`}
            onClick={() => {
              if (!arrowDisabled) {
                handleClick("left");
              }
            }}
          />
        )}
        <div className={styles.cont} ref={listRef}>
          {stableCards.map((card: Card, index: number) => {
            // Ensure the image URL is correct and not altered
            const imageUrl = card.image.trim();
            return (
              <ListItem
                image={imageUrl}
                title={card.title}
                role={card.role ? card.role : ""}
                blurb={card.blurb}
                dateRange={card.dateRange}
                type={card.type}
                techStack={card.techStack}
                blurbBullets={card.blurbBullets}
                setModal={setModal}
                setOpen={setOpen}
                id={card.id}
                key={`${title}-${card.id}-${index}`}
                index={index}
              />
            );
          })}
        </div>
        {modalOpen ? null : (
          <ArrowForwardIosOutlinedIcon
            className={`${styles.sliderArrow} ${styles.right}`}
            onClick={() => {
              if (!arrowDisabled) {
                handleClick("right");
              }
            }}
          />
        )}
      </div>
    </div>
  );
};
export default React.memo(List);
