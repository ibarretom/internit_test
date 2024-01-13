interface IProps extends React.HTMLAttributes<HTMLHRElement> {}

export function Line({ className, ...rest }: IProps) {
  return (
    <hr
      {...rest}
      className={className ? `divider__line ${className}` : `divider__line`}
    ></hr>
  );
}
