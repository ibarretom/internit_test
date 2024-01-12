import { Bullet } from "../../components/Bullet";

import Conforto from "../../assets/images/home/conforto.png";
import Lazer from "../../assets/images/home/lazer.png";
import Memoria from "../../assets/images/home/memoria.png";
import Decor from "../../assets/images/decor.svg";
import DecorAlt from "../../assets/images/decor_alt.svg";
import Slide1 from "../../assets/images/empreendimento/slide1.png";
import Slide2 from "../../assets/images/empreendimento/slide1.png";

import Carrousel1 from "../../assets/images/empreendimento/carrousel1.png";
import Carrousel2 from "../../assets/images/empreendimento/carrousel2.png";
import Carrousel3 from "../../assets/images/empreendimento/carrousel3.png";
import Carrousel4 from "../../assets/images/empreendimento/carrousel4.png";
import Carrousel5 from "../../assets/images/empreendimento/carrousel5.png";
import Carrousel6 from "../../assets/images/empreendimento/carrousel6.png";

import Planta1 from "../../assets/images/plantas/planta1.png";
import Planta2 from "../../assets/images/plantas/planta2.png";

import Map from "../../assets/images/locallizacao/map.png";

import DecorFull from "../../assets/images/decor_full.svg";
import Contato from "../../assets/images/contato/bg.png";

import "../../assets/scss/home/index.scss";
import "../../assets/scss/empreendimento/index.scss";

export function Content() {
  return (
    <main>
      <section id="home">
        <main className="home__hero">
          <div className="home__hero-text">
            <h1 className="h1 white-text">
              aposte no <strong className="text-strong">Conforto</strong> sem
              perder a <strong className="strong">elegância</strong>
            </h1>

            <h1 className="h1 white-text">
              <strong className="text-strong">lazer</strong> à um passo
            </h1>

            <h1 className="h1 white-text">
              crie memórias com <strong className="text-strong">amigos</strong>{" "}
              e <strong className="strong">família</strong>
            </h1>
          </div>

          <a href="#cta" className="home__hero-cta">
            marque uma visita
            <Bullet />
          </a>
        </main>

        <div className="home__banner">
          <img src={Conforto} alt="Sala de estar" />
          <img src={Lazer} alt="Sala de estar" />
          <img src={Memoria} alt="Sala de estar" />
        </div>

        <img src={Decor} className="home__hero-flying-image" />
      </section>

      <section id="empreendimento">
        <main>
          <h3 className="h3">O empreendimento</h3>

          <div>
            <hr></hr>
            <Bullet />
          </div>

          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            viverra nisl, id nullam et morbi. Ornare ut est faucibus nec ut
            curabitur sagittis. Dui risus amet, sit morbi aliquet. In
            consectetur hendrerit ut lobortis nunc enim fusce morbi sagittis.
            Bibendum nulla cursus urna habitant integer in orci, amet. Elementum
            habitasse sem amet sit mi est. Aenean dui, odio malesuada
            ullamcorper est sed. Aliquet lacus, platea nibh ultricies turpis
            diam leo duis. Amet massa, sit rhoncus leo laoreet habitant. Aliquam
            nullam risus duis curabitur.
          </article>
          <div>
            <hr></hr>
            <Bullet />
          </div>

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

            <input type="range" />
          </nav>
        </main>

        <aside className="pictures">
          <img src={Slide1} />
          <img src={Slide2} />
        </aside>
      </section>

      <section id="plantas">
        <main>
          <h3 className="h3">Plantas</h3>

          <div>
            <hr></hr>
            <Bullet />
          </div>

          <div>
            <button>3 Quartos</button>
            <button>2 Quartos</button>
            <button>Cobertura</button>
          </div>
        </main>

        <aside className="pictures">
          <img src={Planta1} />
          <img src={Planta2} />
        </aside>

        <img src={DecorAlt} />
      </section>

      <section id="localizacao">
        <main>
          <h3 className="h3">Localização</h3>

          <div>
            <hr></hr>
            <Bullet />
          </div>

          <address>
            Rua Itaperuna, 100 Santa Rosa - Pé Pequeno Niterói - RJ, 24240-070
          </address>

          <nav>
            <ul>
              <li>
                <span>icon</span>mercado
              </li>
              <li>
                <span>icon</span> PETSHOP
              </li>
              <li>
                <span>icon</span> BICICLETÁRIO
              </li>
              <li>
                <span>icon</span> parque
              </li>
              <li>
                <span>icon</span> banco
              </li>
              <li>
                <span>icon</span> estação de metrô
              </li>
            </ul>
          </nav>
        </main>

        <aside>
          <img src={Map} />
        </aside>
      </section>

      <section id="contato">
        <main>
          <h2 className="h2">Ficou interessado?</h2>
          <p>
            Preencha o formulário abaixo e um de nossos consultores entrará em
            contato.
          </p>

          <form>
            <input type="text" placeholder="Como devemos te chamar?" />
            <input type="text" placeholder="Seu telefone" />
            <input type="text" placeholder="Seu melhor E-mail" />

            <fieldset>
              <input type="checkbox" />
              <label>
                Li e aceito os termos de uso dos dados conforme indicado na
                Política de Privacidade.
              </label>
            </fieldset>
            <button type="submit">Enviar</button>
          </form>
        </main>
        <img src={Contato} />
        <img src={DecorFull} />
      </section>

      <footer>
        <p>Desenvolvido por</p>
        <img src="" />
      </footer>
    </main>
  );
}
