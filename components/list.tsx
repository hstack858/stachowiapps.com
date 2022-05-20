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

  const listRef = useRef();

  const handleClick = (direction: string) => {
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
      listRef.current.style.transform = `translateX(${14.375 + distance}rem)`;
    }
    if (direction === "right" && slideNum < cards.length - 6) {
      setSlideNum(slideNum + 1);
      // @ts-ignore
      listRef.current.style.transform = `translateX(${-14.375 + distance}rem)`;
    }
    setTimeout(() => {
      setArrowDisabled(false);
    }, 500);
  };

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
