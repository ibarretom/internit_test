interface IProps extends React.HtmlHTMLAttributes<HTMLUListElement> {}

export function NavList({ children, ...rest }: IProps) {
  return (
    <ul className="main-menu__nav-list" {...rest}>
      {children}
    </ul>
  );
}
