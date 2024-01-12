interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export function Nav({ children, ...rest }: IProps) {
  return (
    <nav className="main-menu__nav" {...rest}>
      {children}
    </nav>
  );
}
