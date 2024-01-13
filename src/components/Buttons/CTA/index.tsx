import "./styles/index.scss";

import { Bullet } from "@components/Bullet";

interface IProps extends React.HTMLProps<HTMLAnchorElement> {}

export function CTA({ children }: IProps) {
  return (
    <a href="#cta" className="cta">
      {children}
      <Bullet />
    </a>
  );
}
