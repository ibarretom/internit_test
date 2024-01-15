import "../styles/index.scss";
import { useCallback, useRef } from "react";

interface IProps extends React.HTMLAttributes<HTMLDialogElement> {
  Activator: React.ElementType<React.HTMLAttributes<HTMLButtonElement>>;
  Dialog: React.ElementType<React.HTMLAttributes<HTMLDialogElement>>;
  Close: React.ElementType<React.HTMLAttributes<HTMLButtonElement>>;
  onActivatorClick?: (dialog: HTMLDialogElement) => void;
  onCloseClick?: (dialog: HTMLDialogElement) => void;
}

export function Root({
  Activator,
  Dialog,
  Close,
  onActivatorClick,
  onCloseClick,
  children,
}: IProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleActivatorClick = useCallback(() => {
    if (onActivatorClick) {
      onActivatorClick(modalRef.current as HTMLDialogElement);
      return;
    }

    modalRef.current?.showModal();
  }, [onActivatorClick]);

  const handleCloseClick = useCallback(() => {
    console.log("click");
    if (onCloseClick) {
      onCloseClick(modalRef.current as HTMLDialogElement);
      return;
    }

    modalRef.current?.close();
  }, [onCloseClick]);

  return (
    <>
      <Activator onClick={handleActivatorClick} />
      <Dialog ref={modalRef}>
        {children}

        <Close onClick={() => handleCloseClick()} />
      </Dialog>
    </>
  );
}
