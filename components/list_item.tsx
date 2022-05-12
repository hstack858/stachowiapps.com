import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Add,
  PlayArrow,
  ThumbsUpDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

interface ListItemProps {
  image: StaticImageData;
  title;
}

const ListItem: React.FC<ListItemProps> = ({ image, title }) => {
  console.log(title);
  return (
    <div className="w-72 h-56 bg-bgBlack mr-2 overflow-hidden cursor-pointer hover:w-1/3 hover:h-50">
      <Image
        src={image}
        alt=""
        width={100}
        height={60}
        layout="responsive"
        className="hover:h-50"
      />
      <div>
        <div className="text-white">
          <PlayArrow className="text-white" />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbsUpDownOutlined />
        </div>
        <div>
          <span>1 Hour 14 mins</span>
          <span>+16</span>
          <span>1999</span>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aperiam consequatur culpa, error fuga ipsa nihil voluptas. A atque
          consectetur consequuntur dicta, dignissimos doloribus iusto nostrum
          quam reiciendis sunt! Voluptate?
        </div>
        <div>Experience</div>
      </div>
      ß
    </div>
  );
};
export default ListItem;
