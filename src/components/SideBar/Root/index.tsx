import "../../../assets/scss/nav_bar/main_menu.scss";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}
export function Root({ children, ...rest }: IProps) {
  return (
    <aside className="main-menu" {...rest}>
      {children}
    </aside>
  );
}
