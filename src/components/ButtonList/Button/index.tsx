interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: () => JSX.Element;
  isActive?: boolean;
}

export function Button({
  Icon,
  className = "",
  isActive,
  children,
  ...rect
}: IProps) {
  return (
    <button
      className={`button-list__button ${className} ${
        isActive ? "button-list__button--active" : ""
      }`}
      {...rect}
    >
      {Icon ? <Icon /> : <></>}

      <span className="body2 button-list__button-text text-uppercase">
        {children}
      </span>
    </button>
  );
}
