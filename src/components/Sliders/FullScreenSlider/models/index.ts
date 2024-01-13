import Conforto from "@images/home/conforto.png";
import Lazer from "@images/home/lazer.png";
import Memoria from "@images/home/memoria.png";
import { ConfortoText } from "../Text/ConfortoText";
import { LazerText } from "../Text/LazerText";
import { MemoriasText } from "../Text/MemoriasText copy";
import { IFullScreenSliderTextProps } from "../Text";
export type TBanners = "Conforto" | "Lazer" | "Memoria";

export type TBannerElement = {
  id: TBanners;
  img: string;
  text?: (object: IFullScreenSliderTextProps) => JSX.Element;
};

export class AvailableBanners {
  private banners: TBannerElement[] = [
    { id: "Conforto", img: Conforto, text: ConfortoText },
    { id: "Lazer", img: Lazer, text: LazerText },
    { id: "Memoria", img: Memoria, text: MemoriasText },
  ];

  public readonly available: TBannerElement[] = [...this.banners];
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
