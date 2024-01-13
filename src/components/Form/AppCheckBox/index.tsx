import "./styles/index.scss";
interface IProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
}

export function AppCheckBox({ id, ...rest }: IProps) {
  return (
    <label htmlFor={id} className="checkbox__wrapper">
      <input type="checkbox" id={id} {...rest} />
      <span className="checkbox__checkmark"></span>
    </label>
  );
}
