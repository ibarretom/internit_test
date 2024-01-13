import { Image } from "./Image";
import { RootImage } from "./RootImage";
import { RootText } from "./RootText";
import { Text } from "./Text";

export const FullScreenSlider = {
  Image: {
    Root: RootImage,
    Element: Image,
  },
  Text: { Root: RootText, Element: Text },
};
