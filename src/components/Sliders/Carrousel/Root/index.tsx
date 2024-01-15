import "../styles/index.scss";

import { CarouselProvider } from "../context";
import { useCarousel } from "../hooks";
import { forwardRef, useRef } from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  count: number;
  className?: string;
}

export function Root({
  children,
  count,
  className = "",
  style = {},
  ...rest
}: IProps) {
  const navRef = useRef<HTMLDivElement>(null);

  const Nav = forwardRef<HTMLDivElement>((_, ref) => {
    const { imageSize, imageGap } = useCarousel();

    return (
      <nav
        ref={ref}
        className={`carousel__nav ${className}`}
        style={
          {
            "--image-width": `${imageSize}px`,
            "--elements-gap": `${imageGap}px`,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children}
      </nav>
    );
  });

  return (
    <CarouselProvider count={count} parentRef={navRef}>
      <Nav ref={navRef} />
    </CarouselProvider>
  );
}
