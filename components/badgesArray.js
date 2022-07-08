import clown from "../assets/clown.jpg";
import noob from "../assets/noob.png";
import average from "../assets/average.jpg";
import fitness from "../assets/fitness.png";

//time es el tiempo a superar en milisegundos
const badges = [
  { name: "Clown", img: clown, time: 0, text: "0+ Hours", id: 1 },
  { name: "Noob", img: noob, time: 86400000, text: "24+ Hours", id: 2 },
  {
    name: "Average",
    img: average,
    time: 172800000,
    text: "48+ Hours",
    id: 3,
  },
  {
    name: "Fitness",
    img: fitness,
    time: 360000000,
    text: "100+ Hours",
    id: 4,
  },
];
export default badges;
