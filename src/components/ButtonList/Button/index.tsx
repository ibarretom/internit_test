interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: () => JSX.Element;
}

export function Button({ Icon, className = "", children, ...rect }: IProps) {
  return (
    <button className={`button-list__button ${className}`} {...rect}>
      {Icon ? <Icon /> : <></>}

      <span className="body2 button-list__button-text text-uppercase">
        {children}
      </span>
    </button>
  );
}
