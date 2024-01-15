interface IProps extends React.HTMLProps<HTMLImageElement> {
  isVisible: boolean;
}

export function Image({ isVisible, className = "", ...rest }: IProps) {
  return (
    <img
      className={`${isVisible ? `dialog__image--active` : ""} ${className}`}
      {...rest}
    />
  );
}
