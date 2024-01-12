import { SideBar } from "./components/SideBar";
import "./assets/scss/index.scss";
import { Content } from "./views/Content";

function App() {
  return (
    <div className="page__wrapper">
      <Left />
      <Content></Content>
    </div>
  );
}

function Left() {
  return (
    <SideBar.Root>
      <SideBar.Logo className="main-menu__logo" />
      <SideBar.Nav>
        <SideBar.NavList className="main-menu__nav-list">
          <SideBar.NavListItem>
            <SideBar.NavLink text="Home" active={true} href="#home" />
          </SideBar.NavListItem>
          <SideBar.NavListItem>
            <SideBar.NavLink text="O empreendimento" href="#empreendimento" />
          </SideBar.NavListItem>
          <SideBar.NavListItem>
            <SideBar.NavLink text="Plantas" href="#plantas" />
          </SideBar.NavListItem>
          <SideBar.NavListItem>
            <SideBar.NavLink text="Localização" href="#localizacao" />
          </SideBar.NavListItem>
          <SideBar.NavListItem>
            <SideBar.NavLink text="Contato" href="#contato" />
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

export default App;
