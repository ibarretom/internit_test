import { useContext } from "react";
import { CarouselContext } from "../context";

export function useCarousel() {
  const context = useContext(CarouselContext);

  return context;
}
