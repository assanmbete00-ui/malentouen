import IMAGE_01 from "@assets/images/cultures/gallery/gallery1.png";
import IMAGE_02 from "@assets/images/cultures/gallery/gallery2.png";
import IMAGE_03 from "@assets/images/cultures/gallery/gallery3.png";
import IMAGE_04 from "@assets/images/cultures/gallery/gallery4.png";
import IMAGE_05 from "@assets/images/cultures/gallery/gallery5.png";
import IMAGE_06 from "@assets/images/cultures/gallery/gallery6.png";

export const CULTURES_GALLERY = {
  id: "gallery",

  eyebrowKey: "CULTURES_GALLERY_EYEBROW",

  titleKey: "CULTURES_GALLERY_TITLE",

  descriptionKey: "CULTURES_GALLERY_DESCRIPTION",

  items: [
    {
      id: "gallery-01",

      image: IMAGE_01,

      imageAltKey: "CULTURES_GALLERY_IMAGE_01_ALT",

      titleKey: "CULTURES_GALLERY_IMAGE_01_TITLE",
    },

    {
      id: "gallery-02",

      image: IMAGE_02,

      imageAltKey: "CULTURES_GALLERY_IMAGE_02_ALT",

      titleKey: "CULTURES_GALLERY_IMAGE_02_TITLE",
    },

    {
      id: "gallery-03",

      image: IMAGE_03,

      imageAltKey: "CULTURES_GALLERY_IMAGE_03_ALT",

      titleKey: "CULTURES_GALLERY_IMAGE_03_TITLE",
    },

    {
      id: "gallery-04",

      image: IMAGE_04,

      imageAltKey: "CULTURES_GALLERY_IMAGE_04_ALT",

      titleKey: "CULTURES_GALLERY_IMAGE_04_TITLE",
    },

    {
      id: "gallery-05",

      image: IMAGE_05,

      imageAltKey: "CULTURES_GALLERY_IMAGE_05_ALT",

      titleKey: "CULTURES_GALLERY_IMAGE_05_TITLE",
    },

    {
      id: "gallery-06",

      image: IMAGE_06,

      imageAltKey: "CULTURES_GALLERY_IMAGE_06_ALT",

      titleKey: "CULTURES_GALLERY_IMAGE_06_TITLE",
    },
  ],
} as const;
