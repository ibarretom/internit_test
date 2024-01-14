interface IProps extends React.HTMLProps<HTMLUListElement> {}

export function List({ children, ...rest }: IProps) {
  return <ul {...rest}>{children}</ul>;
}
