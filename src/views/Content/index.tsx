import { Home } from "../Home";
import { Plantas } from "../Plantas";
import { Contato } from "../Contato";
import { Localizacao } from "../Localizacao";
import { Empreendimento } from "../Empreendimento";

export function Content() {
  return (
    <main className="page__contet">
      <Home />

      <Empreendimento />

      <Plantas />

      <Localizacao />

      <Contato />

      <footer>
        <p>Desenvolvido por</p>
        <img src="" />
      </footer>
    </main>
  );
}
