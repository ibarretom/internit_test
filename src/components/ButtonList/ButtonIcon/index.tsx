import { forwardRef } from "react";
import "./styles/index.scss";

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  Icon: () => React.ReactNode;
}

export const ButtonIcon = forwardRef<HTMLSpanElement, IProps>(
  ({ Icon, className = "", ...rest }: IProps, ref) => {
    return (
      <span
        ref={ref}
        className={`button-list__button-icon ${className}`}
        {...rest}
      >
        <Icon />
      </span>
    );
  }
);
