import Decor from "@images/decor.svg";
import { CTA } from "@components/Buttons/CTA";
import { useEffect, useMemo, useState } from "react";
import {
  AvailableBanners,
  TBannerElement,
  TBanners,
} from "@/components/Sliders/FullScreenSlider/models";
import { FullScreenSlider } from "@/components/Sliders/FullScreenSlider";

export function Home() {
  const [currentBanner, setCurrentBanner] = useState<TBanners>("Conforto");

  const banners = useMemo(
    () => new AvailableBanners(currentBanner),
    [currentBanner]
  );

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentBanner(banners.next().id);
    }, 2500);

    return () => clearInterval(sliderInterval);
  }, [banners]);

  return (
    <section id="home">
      <main className="home__hero">
        <FullScreenSlider.Text.Root>
          {banners.available.map((banner: TBannerElement) => {
            return banner.text ? (
              <banner.text
                key={banner.id}
                isVisible={currentBanner == banner.id}
              />
            ) : (
              <></>
            );
          })}
        </FullScreenSlider.Text.Root>

        <CTA href="#contato">marque uma visita</CTA>
      </main>

      <FullScreenSlider.Image.Root>
        {banners.available.map((banner: TBannerElement) => {
          return (
            <FullScreenSlider.Image.Element
              banner={banner}
              isVisible={currentBanner === banner.id}
              key={banner.id}
            />
          );
        })}
      </FullScreenSlider.Image.Root>

      <img src={Decor} className="home__hero-flying-image" />
    </section>
  );
}
