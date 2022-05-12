import React, { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "./list_item";
import BTB from "../public/static/btb.jpg";
import LDL from "../public/static/ldl.png";
import ReactPic from "../public/static/react.png";
import NMSP from "../public/static/nmsp.jpg";

interface ListProps {
  title: string;
}

const List: React.FC<ListProps> = ({ title }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNum, setSlideNum] = useState(0);

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

  const getItem = () => {
    if (title === "Experiences") {
      return BTB;
    }
    if (title === "Skills") {
      return ReactPic;
    }
    if (title === "Awards") {
      return NMSP;
    }
    return LDL;
  };

  return (
    <div className="w-full mt-2">
      <span className="text-white font-medium text-2xl ml-10">{title}</span>
      <div className="relative flex items-center mt-2">
        <ArrowBackIosOutlined
          className="w-20 h-full bg-arrowBlack opacity-50 text-white absolute left-0"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="ml-10 flex w-full" ref={listRef}>
          <ListItem image={getItem()} />
          <ListItem image={getItem()} />
          <ListItem image={getItem()} />
          <ListItem image={getItem()} />
          <ListItem image={getItem()} />
        </div>
        <ArrowForwardIosOutlined className="w-10 h-100 bg-arrowBlack opacity-50 text-white absolute right-0" />
      </div>
    </div>
  );
};
export default List;
