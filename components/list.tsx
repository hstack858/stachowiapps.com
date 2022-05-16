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
}

// eslint-disable-next-line react/function-component-definition
const List: React.FC<ListProps> = ({ title }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [slideNum, setSlideNum] = useState(0);

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
    if (direction === "right" && slideNum < cards.length - 5) {
      setSlideNum(slideNum + 1);
      // @ts-ignore
      listRef.current.style.transform = `translateX(${-14.375 + distance}rem)`;
    }
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
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        {/* CONTAINER */}
        {/* @ts-ignore */}
        <div className="cont" ref={listRef}>
          {cards.map((card) => (
            // eslint-disable-next-line react/jsx-key
            <ListItem
              image={card.image}
              title={card.title}
              blurb={card.blurb}
              dateRange={card.dateRange}
              type={card.type}
            />
          ))}
        </div>

        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};
export default List;
