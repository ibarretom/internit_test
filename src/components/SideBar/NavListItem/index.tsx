interface IProps extends React.HtmlHTMLAttributes<HTMLLIElement> {}
export function NavListItem({ children, ...rest }: IProps) {
  return <li {...rest}>{children}</li>;
}
