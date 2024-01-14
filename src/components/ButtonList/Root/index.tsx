import "../styles/index.scss";

interface IProps extends React.HTMLProps<HTMLUListElement> {}

export function Root({ children, className = "", ...rest }: IProps) {
  return (
    <ul className={`button-list ${className}`} {...rest}>
      {children}
    </ul>
  );
}
