import PageBanner from "@components/page_banner";
import useAbout from "./hooks/use_about";
import Identity from "./sub_components/identity";
import History from "./sub_components/history";
import MissionVision from "./sub_components/mission_vision";
import Values from "./sub_components/values";
import Governance from "./sub_components/governance";
import Chief from "./sub_components/chief";
import Commitments from "./sub_components/commitments";
import HeritageLandmarks from "./sub_components/heritage_landmarks";
import ExplorePlatform from "./sub_components/explore_platform";

export default function AboutPage() {
  const { 
    banner,
    identity,
    history,
    missionVision,
    values, 
    governance, 
    chief, 
    commitments, 
    heritageLandmarks, 
    explorePlatform } = useAbout();

  return (
    <>
      <PageBanner {...banner} />
      <Identity {...identity} />
      <History {...history} />
      <MissionVision {...missionVision} />
      <Values {...values} />
      <Governance {...governance} />
      <Chief {...chief} />
      <Commitments {...commitments} />
      <HeritageLandmarks {...heritageLandmarks} />
      <ExplorePlatform {...explorePlatform} />
    </>
  );
}


