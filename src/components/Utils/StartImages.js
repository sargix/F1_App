import img1 from "../../images/startPage/1.jpg";
import img2 from "../../images/startPage/2.jpg";
import img3 from "../../images/startPage/3.jpg";
import img4 from "../../images/startPage/4.jpg";
import img5 from "../../images/startPage/5.jpg";
import img6 from "../../images/startPage/6.jpg";
import img7 from "../../images/startPage/7.jpg";
import img8 from "../../images/startPage/8.jpg";
import img9 from "../../images/startPage/9.jpg";
import img10 from "../../images/startPage/10.jpg";
import img11 from "../../images/startPage/11.jpg";
import img12 from "../../images/startPage/12.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export const randomImg = (min, max) => {
  const randomCount = Math.floor(Math.random() * (max - min)) + min;

  return images[randomCount];
};
