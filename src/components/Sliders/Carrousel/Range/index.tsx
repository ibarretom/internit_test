interface IProps extends React.HTMLProps<HTMLInputElement> {}

export function Range({ className = "", ...rest }: IProps) {
  return (
    <div className="carrousel__slider-wrapper">
      <input
        type="range"
        {...rest}
        className={`carrousel__slider ${className}`}
      />
      <label className="carrousel__slider-instructions h3 mx-auto">
        (Clique e arraste)
      </label>
    </div>
  );
}
