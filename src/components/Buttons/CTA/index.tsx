import "./styles/index.scss";

import { Bullet } from "@components/Bullet";

interface IProps extends React.HTMLProps<HTMLAnchorElement> {}

export function CTA({ children, className = "", ...rest }: IProps) {
  return (
    <a className={`cta ${className}`} {...rest}>
      {children}
      <Bullet />
    </a>
  );
}
