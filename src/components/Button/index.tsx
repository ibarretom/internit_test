import "./styles/index.scss";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export function Button({
  children,
  isActive,
  className = "",
  ...rest
}: IProps) {
  return (
    <button
      {...rest}
      className={`button ${className} ${isActive ? "button__active" : ""}`}
    >
      {children}
    </button>
  );
}
