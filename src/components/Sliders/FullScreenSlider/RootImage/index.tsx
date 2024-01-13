interface IProps extends React.HTMLProps<HTMLDivElement> {}

export function RootImage({ children, className = "", ...rest }: IProps) {
  return (
    <div className={`home__banner ${className}`} {...rest}>
      {children}
    </div>
  );
}
