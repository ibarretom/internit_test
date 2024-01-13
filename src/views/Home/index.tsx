import Conforto from "../../assets/images/home/conforto.png";
import Lazer from "../../assets/images/home/lazer.png";
import Memoria from "../../assets/images/home/memoria.png";
import Decor from "../../assets/images/decor.svg";
import { CTA } from "../../components/Buttons/CTA";

export function Home() {
  return (
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
            crie memórias com <strong className="text-strong">amigos</strong> e{" "}
            <strong className="strong">família</strong>
          </h2>
        </div>

        <CTA href="#contato">marque uma visita</CTA>
      </main>

      <div className="home__banner">
        <img src={Conforto} alt="Sala de estar" />
        <img src={Lazer} alt="Sala de estar" />
        <img src={Memoria} alt="Sala de estar" />
      </div>

      <img src={Decor} className="home__hero-flying-image" />
    </section>
  );
}
