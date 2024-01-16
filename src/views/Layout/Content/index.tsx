import { Home } from "../../Home";
import { Plantas } from "../../Plantas";
import { Contato } from "../../Contato";
import { Localizacao } from "../../Localizacao";
import { Empreendimento } from "../../Empreendimento";

import Internit from "@images/internit.png";

export function Content() {
  return (
    <main className="page__content">
      <Home />

      <Empreendimento />

      <Plantas />

      <Localizacao />

      <Contato />

      <footer>
        <p className="body2 text-strong">Desenvolvido por</p>
        <img src={Internit} />
      </footer>
    </main>
  );
}
