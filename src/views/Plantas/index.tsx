import {
  AvailableBanners,
  TBanners,
} from "@/components/Sliders/FullScreenSlider/models";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";

import DecorAlt from "@images/decor_alt.svg";
import { useMemo, useState } from "react";

export function Plantas() {
  const [currentPlanta, setCurrentPlanta] = useState<TBanners>("3 Quartos");

  const plantas = useMemo(
    () => new AvailableBanners("Planta", currentPlanta),
    [currentPlanta]
  );

  return (
    <section id="plantas">
      <main>
        <h3 className="h3 text-strong">Plantas</h3>

        <Divider.Root>
          <Divider.Line />
          <Divider.Bullet className="right" />
        </Divider.Root>

        <div className="plantas__actions">
          {plantas.available.map((planta) => (
            <Button
              key={planta.id}
              isActive={currentPlanta === planta.id}
              onClick={() => setCurrentPlanta(planta.id)}
            >
              {planta.id}
            </Button>
          ))}
        </div>
      </main>

      <aside className="plantas__pictures">
        {plantas.available.map((planta) => {
          return (
            <img
              src={planta.img}
              data-visible={currentPlanta === planta.id}
              key={planta.id}
            />
          );
        })}
      </aside>

      <img src={DecorAlt} className="plantas__flying-imag" />
    </section>
  );
}
