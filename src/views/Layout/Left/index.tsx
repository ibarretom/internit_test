import { SideBar } from "@/components/SideBar";
import { useEffect, useState } from "react";

export function Left() {
  const [currentHash, setCurrentHash] = useState("#home");

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setCurrentHash(window.location.hash);
    });
  }, [currentHash, setCurrentHash]);

  return (
    <SideBar.Root>
      <SideBar.Logo className="main-menu__logo" />
      <SideBar.Nav>
        <SideBar.NavList className="main-menu__nav-list">
          <SideBar.NavListItem>
            <SideBar.NavLink
              text="Home"
              active={currentHash === "#home"}
              href="#home"
            />
          </SideBar.NavListItem>
          <SideBar.NavListItem>
            <SideBar.NavLink
              text="O empreendimento"
              active={currentHash === "#empreendimento"}
              href="#empreendimento"
            />
          </SideBar.NavListItem>
          <SideBar.NavListItem>
            <SideBar.NavLink
              text="Plantas"
              active={currentHash === "#plantas"}
              href="#plantas"
            />
          </SideBar.NavListItem>
          <SideBar.NavListItem>
            <SideBar.NavLink
              text="Localização"
              active={currentHash === "#localizacao"}
              href="#localizacao"
            />
          </SideBar.NavListItem>
          <SideBar.NavListItem>
            <SideBar.NavLink
              text="Contato"
              active={currentHash === "#contato"}
              href="#contato"
            />
          </SideBar.NavListItem>
          <SideBar.NavListItem className="readonly ">
            <SideBar.NavLink
              className="subtitle"
              text="Políticas de privacidade"
            />
          </SideBar.NavListItem>
        </SideBar.NavList>
      </SideBar.Nav>
    </SideBar.Root>
  );
}
