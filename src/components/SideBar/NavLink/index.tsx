interface IProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  text: string;
  active?: boolean;
}

export function NavLink({ text, active, ...rest }: IProps) {
  return (
    <a
      className={`body text-uppercase ${active ? "text-strong" : ""}`}
      {...rest}
    >
      {text}
    </a>
  );
}
