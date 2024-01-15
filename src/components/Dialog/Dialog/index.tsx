import { forwardRef } from "react";

interface IProps extends React.HTMLAttributes<HTMLDialogElement> {}

export const Dialog = forwardRef<HTMLDialogElement, IProps>(
  ({ children }: IProps, ref) => {
    return (
      <dialog ref={ref} className="dialog">
        {children}
      </dialog>
    );
  }
);
