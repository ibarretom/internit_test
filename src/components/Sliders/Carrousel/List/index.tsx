import { useCarousel } from "../hooks";

interface IProps extends React.HTMLProps<HTMLUListElement> {
  listOffset?: number;
}

export function List({
  children,
  className = "",
  style = {},
  listOffset = 0,
  ...rest
}: IProps) {
  const { listOffset: contextOffset } = useCarousel();

  return (
    <ul
      className={`carrousel__banners ${className}`}
      style={
        {
          "--position": `${contextOffset ? contextOffset : listOffset}px`,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </ul>
  );
}
