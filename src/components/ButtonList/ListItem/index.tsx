interface IProps extends React.HTMLProps<HTMLLIElement> {}

export function ListItem({ children }: IProps) {
  return <li className="button-list__content-wrapper">{children}</li>;
}
