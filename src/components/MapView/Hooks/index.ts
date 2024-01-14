import { useRef } from "react";

export type TMapElements = "market1" | "market2" | "pet";
export type TMapElementButton = "market" | "pet" | null;

export type TMapRefs = {
  [key in TMapElements]: React.LegacyRef<SVGRectElement> | undefined;
};
export type TScreenElement = {
  [key in TMapElements]: React.RefObject<HTMLSpanElement>;
};

export function useMapRefs() {
  const mapRefs: TMapRefs & {
    map: React.RefObject<SVGSVGElement>;
  } = {
    map: useRef(null),
    market1: useRef(null),
    market2: useRef(null),
    pet: useRef(null),
  };

  const elementsRefs: TScreenElement = {
    market1: useRef(null),
    market2: useRef(null),
    pet: useRef(null),
  };

  return { mapRefs, elementsRefs };
}

export function setPosition(
  reference: HTMLElement | null,
  start?: DOMRect,
  end?: DOMRect
) {
  if (!reference || (!start && !end)) return;

  reference.style.top = `${(end?.y ?? 0) - (start?.y ?? 0)}px`;
  reference.style.left = `${(end?.x ?? 0) - (start?.x ?? 0)}px`;
}
