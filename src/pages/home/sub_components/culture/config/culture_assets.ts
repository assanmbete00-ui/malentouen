import CultureHighlightImage from "@assets/images/home/culture/highlight.jpg";
import CultureTraditionsImage from "@assets/images/home/culture/traditions.png";
import CultureCraftImage from "@assets/images/home/culture/craft.png";
import CultureDanceImage from "@assets/images/home/culture/dance.png";


export const CULTURE_ASSETS = {
  highlight: CultureHighlightImage,

  items: {
    traditions: CultureTraditionsImage,
    craft: CultureCraftImage,
    dance: CultureDanceImage,
  },
} as const;