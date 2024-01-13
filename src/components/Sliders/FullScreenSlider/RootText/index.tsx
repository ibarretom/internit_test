interface IProps extends React.HTMLProps<HTMLDivElement> {}

export function RootText({ children, className = "", ...rest }: IProps) {
  return (
    <div className={`home__hero-text ${className}`} {...rest}>
      {children}
    </div>
  );
}
