import "../styles/index.scss";

interface IProps extends React.HTMLAttributes<HTMLFieldSetElement> {}

export function Root({ children, className = "", ...rest }: IProps) {
  return (
    <fieldset className={`input__wrapper ${className}`} {...rest}>
      {children}
    </fieldset>
  );
}
