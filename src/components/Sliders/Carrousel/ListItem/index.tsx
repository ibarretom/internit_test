interface IProps extends React.HTMLProps<HTMLLIElement> {}

export function ListItem({ className = "", ...rest }: IProps) {
  return <li className={`carrousel__banner ${className}`} {...rest} />;
}
