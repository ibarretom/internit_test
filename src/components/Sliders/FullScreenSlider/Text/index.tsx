export interface IFullScreenSliderTextProps
  extends React.HTMLProps<HTMLHeadingElement> {
  isVisible: boolean;
}

export function Text({
  children,
  className = "",
  isVisible = false,
  ...rest
}: IFullScreenSliderTextProps) {
  return (
    <h2
      className={`h1 white-text ${className}`}
      data-visible={isVisible}
      {...rest}
    >
      {children}
    </h2>
  );
}
