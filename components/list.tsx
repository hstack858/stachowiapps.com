import React, { useEffect, useRef, useState } from "react";
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

interface ListProps {
  title: string;
  setOpen: () => void;
  modalOpen: boolean;
  setModal: (card: Card) => void;
}

// eslint-disable-next-line react/function-component-definition
const List: React.FC<ListProps> = ({ title, setOpen, modalOpen, setModal }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [slideNum, setSlideNum] = useState(0);
  const [arrowDisabled, setArrowDisabled] = useState(false);

  useEffect(() => {
    if (title === "Experiences") {
      setCards(experiences);
    }
    if (title === "Skills") {
      setCards(skills);
    }
    if (title === "Awards/Certifications") {
      setCards(awards);
    }
    if (title === "Projects") {
      setCards(projects);
    }
  }, [cards, title]);

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

  const listRef = useRef();

  const handleClick = (direction: string) => {
    let adder = 0;
    if (window.innerWidth > 470) {
      adder = 14.375;
    } else {
      adder = 9.59;
    }

    setArrowDisabled(true);
    let rect = 0;
    if (listRef !== undefined) {
      // @ts-ignore
      rect = listRef.current.getBoundingClientRect().x - 50;
    }
    const distance = convertPixelsToRem(rect);
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      // @ts-ignore
      listRef.current.style.transform = `translateX(${adder + distance}rem)`;
    } else {
      const cardsPerRow = getCardNumPerRow();
      console.log(cards.length, cardsPerRow, slideNum);
      if (direction === "right" && slideNum < cards.length - cardsPerRow) {
        setSlideNum(slideNum + 1);
        // @ts-ignore
        listRef.current.style.transform = `translateX(${-adder + distance}rem)`;
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
    <div id={getId()} className="list">
      <span className="listTitle">{title}</span>
      {/* WRAPPER */}
      <div className="wrapper">
        {modalOpen ? null : (
          <ArrowBackIosNewOutlinedIcon
            className="sliderArrow left"
            onClick={() => {
              if (!arrowDisabled) {
                handleClick("left");
              }
            }}
          />
        )}
        {/* CONTAINER */}
        {/* @ts-ignore */}
        <div className="cont" ref={listRef}>
          {cards.map((card) => (
            // eslint-disable-next-line react/jsx-key
            <ListItem
              image={card.image}
              title={card.title}
              role={card.role ? card.role : ""}
              blurb={card.blurb}
              dateRange={card.dateRange}
              type={card.type}
              techStack={card.techStack}
              blurbBullets={card.blurbBullets}
              setModal={setModal}
              setOpen={setOpen}
            />
          ))}
        </div>
        {modalOpen ? null : (
          <ArrowForwardIosOutlinedIcon
            className="sliderArrow right"
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
export default List;
