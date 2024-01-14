import "../styles/index.scss";

import { CarouselProvider } from "../context";
import { useCarousel } from "../hooks";

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
  const Nav = () => {
    const { imageSize, imageGap } = useCarousel();
    return (
      <nav
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
  };

  return (
    <CarouselProvider count={count}>
      <Nav />
    </CarouselProvider>
  );
}
