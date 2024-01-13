import Conforto from "@images/home/conforto.png";
import Lazer from "@images/home/lazer.png";
import Memoria from "@images/home/memoria.png";
import { ConfortoText } from "../Text/ConfortoText";
import { LazerText } from "../Text/LazerText";
import { MemoriasText } from "../Text/MemoriasText copy";
import { IFullScreenSliderTextProps } from "../Text";

import Quartos3 from "@images/plantas/3Quartos.png";
import Quartos2 from "@images/plantas/2Quartos.png";
import Cobertura from "@images/plantas/Cobertura.png";

export type TBannersHome = "Conforto" | "Lazer" | "Memoria";
export type TBannersPlanta = "3 Quartos" | "2 Quartos" | "Cobertura";

export type TBanners = TBannersHome | TBannersPlanta;

export type TSections = "Home" | "Planta";

export type TBannerElement = {
  id: TBanners;
  img: string;
  text?: (object: IFullScreenSliderTextProps) => JSX.Element;
};

type TApplicationBanners = {
  [key in TSections]: TBannerElement[];
};

export class AvailableBanners {
  private banners: TApplicationBanners = {
    Home: [
      { id: "Conforto", img: Conforto, text: ConfortoText },
      { id: "Lazer", img: Lazer, text: LazerText },
      { id: "Memoria", img: Memoria, text: MemoriasText },
    ],
    Planta: [
      { id: "3 Quartos", img: Quartos3 },
      { id: "2 Quartos", img: Quartos2 },
      { id: "Cobertura", img: Cobertura },
    ],
  };

  private currentIndex: number = 0;
  private typeBanner: TSections;

  public readonly available: TBannerElement[];

  constructor(typeBanner: TSections, startBanner: TBanners) {
    this.typeBanner = typeBanner;

    this.available = [...this.banners[this.typeBanner]];

    this.currentIndex = this.available.findIndex(
      (banner) => banner.id === startBanner
    );
  }

  public next(): TBannerElement {
    this.currentIndex = (this.currentIndex + 1) % this.available.length;

    return this.current();
  }

  public current(): TBannerElement {
    return this.available[this.currentIndex];
  }
}
