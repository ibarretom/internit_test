import { Divider } from "../../components/Divider";

import Slide1 from "../../assets/images/empreendimento/slide1.png";
import Slide2 from "../../assets/images/empreendimento/slide1.png";

import Carrousel1 from "../../assets/images/empreendimento/carrousel1.png";
import Carrousel2 from "../../assets/images/empreendimento/carrousel2.png";
import Carrousel3 from "../../assets/images/empreendimento/carrousel3.png";
import Carrousel4 from "../../assets/images/empreendimento/carrousel4.png";
import Carrousel5 from "../../assets/images/empreendimento/carrousel5.png";
import Carrousel6 from "../../assets/images/empreendimento/carrousel6.png";

import "../../assets/scss/empreendimento/index.scss";

import { Home } from "../Home";
import { Plantas } from "../Plantas";
import { Contato } from "../Contato";
import { Localizacao } from "../Localizacao";

export function Content() {
  return (
    <main className="page__contet">
      <Home />

      <section id="empreendimento">
        <main>
          <h3 className="h3 text-strong mt-4">O empreendimento</h3>

          <Divider.Root>
            <Divider.Line />
            <Divider.Bullet className="right" />
          </Divider.Root>

          <article className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            viverra nisl, id nullam et morbi. Ornare ut est faucibus nec ut
            curabitur sagittis. Dui risus amet, sit morbi aliquet. In
            consectetur hendrerit ut lobortis nunc enim fusce morbi sagittis.
            Bibendum nulla cursus urna habitant integer in orci, amet. Elementum
            habitasse sem amet sit mi est. Aenean dui, odio malesuada
            ullamcorper est sed. Aliquet lacus, platea nibh ultricies turpis
          </article>

          <Divider.Root className="translate-80">
            <Divider.Line />
            <Divider.Bullet className="left" />
          </Divider.Root>

          <nav className="empreendimento__carrousel">
            <ul className="empreendimento__carrousel-banners">
              <li>
                <img src={Carrousel1} />
              </li>
              <li>
                <img src={Carrousel2} />
              </li>
              <li>
                <img src={Carrousel3} />
              </li>
              <li>
                <img src={Carrousel4} />
              </li>
              <li>
                <img src={Carrousel5} />
              </li>
              <li>
                <img src={Carrousel6} />
              </li>
            </ul>

            <div className="empreendimento__carrousel-slider__wrapper">
              <input
                type="range"
                className="empreendimento__carrousel-slider"
              />
              <label className="empreendimento__carrousel-slider__instructions h3 mx-auto">
                (Clique e arraste)
              </label>
            </div>
          </nav>
        </main>

        <aside className="pictures">
          <img src={Slide1} />
          <img src={Slide2} />
        </aside>
      </section>

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
