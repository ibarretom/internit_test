import "@scss/index.scss";

import { Content } from "./Content";
import { Left } from "./Left";

export function Layout() {
  return (
    <div className="page__wrapper">
      <Left />
      <Content></Content>
    </div>
  );
}
