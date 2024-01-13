import "../styles/index.scss";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Root({ children, className, ...rest }: IProps) {
  return (
    <div {...rest} className={className ? `divider ${className}` : `divider`}>
      {children}
    </div>
  );
}
