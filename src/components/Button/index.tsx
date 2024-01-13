import "./styles/index.scss";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...rest }: IProps) {
  return (
    <button {...rest} className={!className ? `button` : `button ${className}`}>
      {children}
    </button>
  );
}
