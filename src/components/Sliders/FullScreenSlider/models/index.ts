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
import PlantaCobertura from "@images/plantas/planta_cobertura.png";
import Planta2Quartos from "@images/plantas/planta_2quartos.png";

import Slide1 from "@images/empreendimento/slide1.png";
import Slide2 from "@images/empreendimento/slide2.png";

export type TBannersHome = "Conforto" | "Lazer" | "Memoria";
export type TBannersPlanta = "3 Quartos" | "2 Quartos" | "Cobertura";
export type TBannersEmpreendimento = "Slide 1" | "Slide 2";

export type TBanners = TBannersHome | TBannersPlanta | TBannersEmpreendimento;

export type TSections = "Home" | "Planta" | "Empreendimento";

export type TBannerElement = {
  id: TBanners;
  img: string;
  text?: (object: IFullScreenSliderTextProps) => JSX.Element;
  imgDetails?: string;
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
      { id: "3 Quartos", img: Quartos3, imgDetails: Planta2Quartos },
      { id: "2 Quartos", img: Quartos2, imgDetails: Planta2Quartos },
      { id: "Cobertura", img: Cobertura, imgDetails: PlantaCobertura },
    ],
    Empreendimento: [
      { id: "Slide 1", img: Slide1 },
      { id: "Slide 2", img: Slide2 },
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

  public setById(id: TBanners): TBannerElement {
    this.currentIndex = this.available.findIndex((banner) => banner.id === id);

    return this.current();
  }

  public current(): TBannerElement {
    return this.available[this.currentIndex];
  }
}
