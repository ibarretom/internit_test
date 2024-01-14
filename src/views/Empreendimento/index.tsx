import { Divider } from "@components/Divider";

import Carrousel1 from "@images/empreendimento/carrousel1.png";
import Carrousel2 from "@images/empreendimento/carrousel2.png";
import Carrousel3 from "@images/empreendimento/carrousel3.png";
import Carrousel4 from "@images/empreendimento/carrousel4.png";

import { Carrousel } from "@/components/Sliders/Carrousel";
import { FullScreenSlider } from "@/components/Sliders/FullScreenSlider";
import { useMemo, useState } from "react";
import {
  AvailableBanners,
  TBanners,
} from "@/components/Sliders/FullScreenSlider/models";

export function Empreendimento() {
  const [currentSlide, setCurrentSlide] = useState<TBanners>("Slide 1");

  const empreendimentoSlider = useMemo(
    () => new AvailableBanners("Empreendimento", "Slide 1"),
    []
  );
  return (
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
          curabitur sagittis. Dui risus amet, sit morbi aliquet. In consectetur
          hendrerit ut lobortis nunc enim fusce morbi sagittis. Bibendum nulla
          cursus urna habitant integer in orci, amet. Elementum habitasse sem
          amet sit mi est. Aenean dui, odio malesuada ullamcorper est sed.
          Aliquet lacus, platea nibh ultricies turpis
        </article>

        <Divider.Root className="translate-80">
          <Divider.Line />
          <Divider.Bullet className="left" />
        </Divider.Root>

        <Carrousel.Root count={4}>
          <Carrousel.List>
            <Carrousel.ListItem
              onClick={() =>
                setCurrentSlide(empreendimentoSlider.setById("Slide 1").id)
              }
            >
              <Carrousel.Image src={Carrousel1} />
            </Carrousel.ListItem>
            <Carrousel.ListItem
              onClick={() =>
                setCurrentSlide(empreendimentoSlider.setById("Slide 2").id)
              }
            >
              <Carrousel.Image src={Carrousel2} />
            </Carrousel.ListItem>
            <Carrousel.ListItem>
              <Carrousel.Image src={Carrousel3} />
            </Carrousel.ListItem>
            <Carrousel.ListItem>
              <Carrousel.Image src={Carrousel4} />
            </Carrousel.ListItem>
          </Carrousel.List>
          <Carrousel.RangeWithContext />
        </Carrousel.Root>
      </main>

      <FullScreenSlider.Image.Root className="pictures">
        {empreendimentoSlider.available.map((slide) => (
          <FullScreenSlider.Image.Element
            banner={slide}
            isVisible={slide.id == currentSlide}
            key={slide.id}
          />
        ))}
      </FullScreenSlider.Image.Root>
    </section>
  );
}
