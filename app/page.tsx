import Blessing from "../components/Blessing";
import CallResponse from "../components/CallResponse";
import DetailsButton from "../components/DetailsButton";
import Family from "../components/Family";
import Hero from "../components/Hero";
import InvitationGate from "../components/InvitationGate";
import LongDistance from "../components/LongDistance";
import Meeting from "../components/Meeting";
import MatrimonyChapter from "../components/MatrimonyChapter";
import Story from "../components/Story";
import WeddingDetails from "../components/WeddingDetails";

export default function Home() {
  return <main><InvitationGate /><DetailsButton /><Hero /><Story /><CallResponse /><MatrimonyChapter /><LongDistance /><Meeting /><Family /><WeddingDetails /><Blessing /></main>;
}
