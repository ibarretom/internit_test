interface IProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

export function Label({ children, htmlFor, className = "", ...rest }: IProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`input__floating-label ${className}`}
      {...rest}
    >
      {children}
    </label>
  );
}
