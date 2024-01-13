import Conforto from "../../assets/images/home/conforto.png";
import Lazer from "../../assets/images/home/lazer.png";
import Memoria from "../../assets/images/home/memoria.png";
import Decor from "../../assets/images/decor.svg";
import { CTA } from "../../components/Buttons/CTA";
import { useState } from "react";

type TBanners = "Conforto" | "Lazer" | "Memoria";

type TBannerElement = {
  id: TBanners;
  img: string;
};
class AvailableBanners {
  private banners: TBannerElement[] = [
    { id: "Conforto", img: Conforto },
    { id: "Lazer", img: Lazer },
    { id: "Memoria", img: Memoria },
  ];
  public readonly available: TBannerElement[] = structuredClone(this.banners);
  private currentIndex: number = 0;

  constructor(currentBanner: TBanners) {
    this.currentIndex = this.banners.findIndex(
      (banner) => banner.id == currentBanner
    );
  }

  public next(): TBannerElement {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;

    return this.current();
  }

  public current(): TBannerElement {
    return this.banners[this.currentIndex];
  }
}

export function Home() {
  const [currentBanner, setCurrentBanner] = useState<TBanners>("Conforto");

  const banners = new AvailableBanners(currentBanner);

  setInterval(() => {
    setCurrentBanner(banners.next().id);
  }, 2000);

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
        {banners.available.map((banner: TBannerElement) => {
          return (
            <img
              className="home__banner-image"
              src={banner.img}
              alt="Sala de estar"
              data-visible={currentBanner === banner.id}
              key={banner.id}
            />
          );
        })}
      </div>

      <img src={Decor} className="home__hero-flying-image" />
    </section>
  );
}
