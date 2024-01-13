interface IProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
}

export function Input({ id, className = "", value = "", ...rest }: IProps) {
  const emptyOrDirty = value ? "input__floating-label--dirty" : "";
  return (
    <input
      id={id}
      className={`${emptyOrDirty} ${className}`}
      value={value}
      {...rest}
    />
  );
}
