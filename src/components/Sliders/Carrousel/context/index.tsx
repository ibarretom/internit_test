import { createContext, useMemo, useState } from "react";

interface ICarouselContext {
  listOffset: number;
  range: number;
  imageSize: number;
  imageGap: number;
  setRange: (listOffset: number) => void;
}
export const CarouselContext = createContext<ICarouselContext>(
  {} as ICarouselContext
);

interface IProps {
  children: React.ReactNode;
  count: number;
  size?: "medium";
  parentRef: React.RefObject<HTMLDivElement>;
}

const carrouselImageSizes = {
  medium: 194,
};

const imageGap = 24;

export function CarouselProvider({
  children,
  count,
  size = "medium",
  parentRef,
}: IProps) {
  const [range, setRange] = useState(0);

  const imageSize = useMemo(() => carrouselImageSizes[size], [size]);

  const totalSize = useMemo(() => {
    const carouselTotalSize = imageSize * count;
    const carouselTotalGap = imageGap * (count - 1);

    return carouselTotalSize + carouselTotalGap;
  }, [count, imageSize]);

  const listOffset = useMemo(() => {
    const rangePercentage = range / 100;
    const parentSize = parentRef.current?.getBoundingClientRect().width ?? 0;

    const amountOverflowing = totalSize - parentSize;

    return -rangePercentage * amountOverflowing;
  }, [range, totalSize, parentRef]);

  return (
    <CarouselContext.Provider
      value={{ listOffset, range, setRange, imageSize, imageGap }}
    >
      {children}
    </CarouselContext.Provider>
  );
}
