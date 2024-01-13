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
      className={`home__banner-image ${className}`}
      src={banner.img}
      alt="Sala de estar"
      data-visible={isVisible}
      key={banner.id}
      {...rest}
    />
  );
}
