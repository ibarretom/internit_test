import "../styles/index.scss";

interface IProps extends React.HTMLProps<HTMLDivElement> {}

export function RootImage({ children, className = "", ...rest }: IProps) {
  return (
    <div className={`full-screen-slider__image-wrapper ${className}`} {...rest}>
      {children}
    </div>
  );
}
