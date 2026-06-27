import CultureHighlightImage from "@assets/images/culture/highlight.jpg";
import CultureTraditionsImage from "@assets/images/culture/traditions.png";
import CultureCraftImage from "@assets/images/culture/craft.png";
import CultureDanceImage from "@assets/images/culture/dance.png";

export const CULTURE_ASSETS = {
  highlight: CultureHighlightImage,

  items: {
    traditions: CultureTraditionsImage,
    craft: CultureCraftImage,
    dance: CultureDanceImage,
  },
} as const;