import Blessing from "../components/Blessing";
import CallResponse from "../components/CallResponse";
import Family from "../components/Family";
import Hero from "../components/Hero";
import LongDistance from "../components/LongDistance";
import Meeting from "../components/Meeting";
import Nav from "../components/Nav";
import Story from "../components/Story";
import WeddingDetails from "../components/WeddingDetails";

export default function Home() {
  return <main><Nav /><Hero /><CallResponse /><Story /><LongDistance /><Meeting /><Family /><WeddingDetails /><Blessing /></main>;
}
