import { forwardRef } from "react";
import "./styles/index.scss";
interface IProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
}

export const AppCheckBox = forwardRef<HTMLInputElement, IProps>(
  ({ id, ...rest }: IProps, ref) => {
    return (
      <label htmlFor={id} className="checkbox__wrapper">
        <input
          id={id}
          ref={ref}
          type="checkbox"
          className="app-checkbox"
          {...rest}
        />
        <span className="checkbox__checkmark"></span>
      </label>
    );
  }
);
