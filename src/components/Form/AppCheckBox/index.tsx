import { forwardRef } from "react";
import "./styles/index.scss";
interface IProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
}

export const AppCheckBox = forwardRef<HTMLInputElement, IProps>(
  ({ id, ...rest }: IProps) => {
    return (
      <label htmlFor={id} className="checkbox__wrapper">
        <input type="checkbox" className="app-checkbox" id={id} {...rest} />
        <span className="checkbox__checkmark"></span>
      </label>
    );
  }
);
