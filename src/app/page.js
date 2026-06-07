import Banner from "@/Components/Banner";
import ExtraSection from "@/Components/ExtraSection";
import LibrayCard from "@/Components/LibrayCard";
import Image from "next/image";
import AllRoomsPage from "./allroom/page";
import HomePage from "@/Components/HomeFeature";

export default function Home() {
  return (
    <>
      <Banner/>
      <HomePage/>
  <LibrayCard/>
  <ExtraSection/>
    </>

  );
}
