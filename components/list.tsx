import React, { useEffect, useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "./list_item";
import {
  experiences,
  projects,
  skills,
  awards,
  Card,
} from "./constants/slider_data";

interface ListProps {
  title: string;
}

const List: React.FC<ListProps> = ({ title }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isMoved, setIsMoved] = useState(false);
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
    console.log(cards);
  }, [cards, title]);

  const listRef = useRef();

  const handleClick = (direction: string) => {
    setIsMoved(true);
    // @ts-ignore
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      // @ts-ignore
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNum < 5) {
      setSlideNum(slideNum + 1);
      // @ts-ignore
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const getId = () => {
    if (title === "Awards/Certifications") {
      return "Awards";
    }
    return <title />;
  };

  return (
    <div id={getId()} className="w-full mb-4">
      <span className="text-white font-medium text-2xl ml-10">{title}</span>
      <div className="relative flex items-center">
        <ArrowBackIosOutlined
          className="w-20 h-full bg-arrowBlack opacity-50 text-white absolute left-0"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="ml-10 flex justify-between" ref={listRef}>
          {cards.map((card) => (
            <ListItem image={card.image} title={card.title} />
          ))}
        </div>
        <ArrowForwardIosOutlined className="w-10 h-100 bg-arrowBlack opacity-50 text-white absolute right-0" />
      </div>
    </div>
  );
};
export default List;
