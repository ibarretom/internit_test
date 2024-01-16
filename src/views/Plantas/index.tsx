import "@scss/plantas/index.scss";

import { FullScreenSlider } from "@/components/Sliders/FullScreenSlider";
import {
  AvailableBanners,
  TBanners,
} from "@/components/Sliders/FullScreenSlider/models";
import { Button } from "@/components/Buttons/Button";
import { Divider } from "@components/Divider";

import DecorAlt from "@images/decor_alt.svg";
import { useMemo, useRef, useState } from "react";
import { Dialog } from "@/components/Dialog";

const startBanner: TBanners = "3 Quartos";

export function Plantas() {
  const [currentPlanta, setCurrentPlanta] = useState<TBanners>(startBanner);

  const plantas = useMemo(
    () => new AvailableBanners("Planta", startBanner),
    []
  );

  const modalRef = useRef<HTMLDialogElement>(null);

  const handleActivatorClick = () => {
    modalRef.current?.showModal();
  };

  const handleCloseClick = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <section id="plantas">
        <div className="plantas__content-wrapper">
          <h3 className="h3 text-strong plantas__title">Plantas</h3>

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
        </div>

        <FullScreenSlider.Image.Root className="plantas__pictures">
          {plantas.available.map((planta) => {
            return (
              <FullScreenSlider.Image.Element
                onClick={handleActivatorClick}
                banner={planta}
                isVisible={currentPlanta === planta.id}
                key={planta.id}
              />
            );
          })}
          <Dialog.Root
            Dialog={Dialog.Element}
            Activator={Dialog.Activator}
            Close={Dialog.Close}
          >
            {plantas.available.map((planta) => {
              return planta.imgDetails ? (
                <Dialog.Image
                  src={planta.imgDetails}
                  isVisible={planta.id === currentPlanta}
                />
              ) : (
                <></>
              );
            })}
          </Dialog.Root>

          <Dialog.Element ref={modalRef}>
            {plantas.available.map((planta) => {
              return planta.imgDetails ? (
                <Dialog.Image
                  src={planta.imgDetails}
                  isVisible={planta.id === currentPlanta}
                />
              ) : (
                <></>
              );
            })}

            <Dialog.Close onClick={handleCloseClick} />
          </Dialog.Element>
        </FullScreenSlider.Image.Root>

        <img src={DecorAlt} className="plantas__flying-imag" />
      </section>
    </>
  );
}
