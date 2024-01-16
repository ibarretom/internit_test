import "../styles/index.scss";

interface IProps extends React.HTMLProps<HTMLImageElement> {
  banner: { id: string; img: string };
  isVisible: boolean;
}

export function Image({
  banner,
  isVisible = false,
  className = "",
  ...rest
}: IProps) {
  return (
    <img
      className={`full-screen-slider__image ${className}`}
      src={banner.img}
      data-visible={isVisible}
      key={banner.id}
      {...rest}
    />
  );
}
