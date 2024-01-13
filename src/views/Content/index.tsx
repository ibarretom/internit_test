import { FloatingInput } from "../../components/Form/FloatingInput";
import { Bullet } from "../../components/Bullet";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";

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

import Bank from "../../assets/images/icons/icons8-bank-50.svg";
import Bike from "../../assets/images/icons/icons8-bicycle-50.svg";
import Park from "../../assets/images/icons/icons8-park-50.svg";
import Pet from "../../assets/images/icons/icons8-play-with-pet-50.svg";
import Shop from "../../assets/images/icons/icons8-shop-50.svg";
import Train from "../../assets/images/icons/icons8-train-50.svg";

import "../../assets/scss/home/index.scss";
import "../../assets/scss/empreendimento/index.scss";
import "../../assets/scss/plantas/index.scss";
import "../../assets/scss/localizacao/index.scss";
import "../../assets/scss/contato/index.scss";
import { AppCheckBox } from "../../components/Form/AppCheckBox";
export function Content() {
  return (
    <main>
      <section id="home">
        <main className="home__hero">
          <div className="home__hero-text">
            <h2 className="h1 white-text">
              aposte no <strong className="text-strong">Conforto</strong> sem
              perder a <strong className="strong">elegância</strong>
            </h2>

            <h2 className="h1 white-text">
              <strong className="text-strong">lazer</strong> à um passo
            </h2>

            <h2 className="h1 white-text">
              crie memórias com <strong className="text-strong">amigos</strong>{" "}
              e <strong className="strong">família</strong>
            </h2>
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

      <section id="plantas">
        <main>
          <h3 className="h3 text-strong">Plantas</h3>

          <Divider.Root>
            <Divider.Line />
            <Divider.Bullet className="right" />
          </Divider.Root>

          <div className="plantas__actions">
            <Button className="active">3 Quartos</Button>
            <Button>2 Quartos</Button>
            <Button>Cobertura</Button>
          </div>
        </main>

        <aside className="plantas__pictures">
          <img src={Planta1} />
          <img src={Planta2} />
        </aside>

        <img src={DecorAlt} className="plantas__flying-imag" />
      </section>

      <section id="localizacao">
        <main>
          <div className="localizacao__header">
            <h3 className="h3 text-strong">Localização</h3>

            <Divider.Root>
              <Divider.Line />
              <Divider.Bullet className="right" />
            </Divider.Root>
          </div>
          <div className="localizacao__content">
            <address className="body">
              Rua Itaperuna, 100 Santa Rosa - Pé Pequeno Niterói - RJ, 24240-070
            </address>

            <nav className="localizacao__nav my-auto">
              <ul>
                <li className="localizacao__nav-content-wrapper">
                  <span className="localizacao__nav-icon">
                    <img src={Shop} />
                  </span>

                  <span className="body2 localizacao__nav-text text-uppercase">
                    mercado
                  </span>
                </li>
                <li className="localizacao__nav-content-wrapper">
                  <span className="localizacao__nav-icon">
                    <img src={Pet} />
                  </span>
                  <span className="body2 localizacao__nav-text text-uppercase">
                    PETSHOP
                  </span>
                </li>
                <li className="localizacao__nav-content-wrapper">
                  <span className="localizacao__nav-icon">
                    <img src={Bike} />
                  </span>
                  <span className="body2 localizacao__nav-text text-uppercase">
                    BICICLETÁRIO
                  </span>
                </li>
                <li className="localizacao__nav-content-wrapper">
                  <span className="localizacao__nav-icon">
                    <img src={Park} />
                  </span>
                  <span className="body2 localizacao__nav-text text-uppercase">
                    parque
                  </span>
                </li>
                <li className="localizacao__nav-content-wrapper">
                  <span className="localizacao__nav-icon">
                    <img src={Bank} />
                  </span>
                  <span className="body2 localizacao__nav-text text-uppercase">
                    banco
                  </span>
                </li>
                <li className="localizacao__nav-content-wrapper">
                  <span className="localizacao__nav-icon">
                    <img src={Train} />
                  </span>
                  <span className="localizacao__nav-text body2 text-uppercase">
                    estação de metrô
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </main>

        <aside>
          <img src={Map} />
        </aside>
      </section>

      <section id="contato">
        <main>
          <h2 className="h2 text-strong white-text">Ficou interessado?</h2>
          <p className="body text-strong white-text">
            Preencha o formulário abaixo e um de nossos consultores entrará em
            contato.
          </p>

          <form className="contato__form mt-8">
            <FloatingInput.Root>
              <FloatingInput.Input id="nome" type="text" />
              <FloatingInput.Label htmlFor="nome">
                Como devemos te chamar?
              </FloatingInput.Label>
            </FloatingInput.Root>

            <FloatingInput.Root>
              <FloatingInput.Input id="telefone" type="text" />
              <FloatingInput.Label htmlFor="telefone">
                Seu telefone
              </FloatingInput.Label>
            </FloatingInput.Root>

            <FloatingInput.Root>
              <FloatingInput.Input id="email" type="text" />
              <FloatingInput.Label htmlFor="email">
                Seu melhor E-mail
              </FloatingInput.Label>
            </FloatingInput.Root>

            <div className="contato__form-footer">
              <fieldset className="contato-form-footer__policy">
                <AppCheckBox id="policy" />

                <label className="subtitle text-medium white-text">
                  Li e aceito os termos de uso dos dados conforme indicado na
                  Política de Privacidade.
                </label>
              </fieldset>

              <button type="submit">Enviar</button>
            </div>
          </form>
        </main>
        <img src={Contato} className="contato__bg-img" />
        <img src={DecorFull} className="contato__floating-image" />
      </section>

      <footer>
        <p>Desenvolvido por</p>
        <img src="" />
      </footer>
    </main>
  );
}
