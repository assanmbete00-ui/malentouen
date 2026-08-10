import PageBanner from "@components/page_banner";
import useCultures from "./hooks/use_cultures";
import Introduction from "./sub_components/introduction"; 
import TraditionsRites from "./sub_components/traditions_rites";
import CulturalExpressions from "./sub_components/cultural_expressions";
import Craftsmanship from "./sub_components/craftsmanship";
import IntangibleHeritage from "./sub_components/intangible_heritage";
import CulturalGallery from "./sub_components/cultural_gallery";

export default function Cultures() {
  const {
    banner,
    introduction,
    traditions,
    expressions,
    craftsmanship,
    intangibleHeritage,
    gallery,
  } = useCultures();

  return (
    <>
      <PageBanner {...banner} />
      <Introduction {...introduction} />
      <TraditionsRites {...traditions} />
      <CulturalExpressions {...expressions} />
      <Craftsmanship {...craftsmanship} />
      <IntangibleHeritage {...intangibleHeritage} />
      <CulturalGallery {...gallery} />
    </>
  );
}