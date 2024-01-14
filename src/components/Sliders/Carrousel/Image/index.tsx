interface IProps extends React.HTMLProps<HTMLImageElement> {}

export function Image({ className = "", ...rest }: IProps) {
  return <img className={`carrousel__image ${className}`} {...rest} />;
}
