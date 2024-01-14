import "@scss/localizacao/index.scss";

import { useCallback, useEffect, useRef } from "react";
import { Divider } from "@/components/Divider";
import { ButtonList } from "@/components/ButtonList";
import { MapView } from "@/components/MapView";

import Bank from "@images/icons/icons8-bank-50.svg";
import Bike from "@images/icons/icons8-bicycle-50.svg";
import Park from "@images/icons/icons8-park-50.svg";
import Pet from "@images/icons/icons8-play-with-pet-50.svg";
import Shop from "@images/icons/icons8-shop-50.svg";
import Train from "@images/icons/icons8-train-50.svg";

export function Localizacao() {
  const mapRef = useRef<SVGSVGElement>(null);
  const market1RectRef = useRef<SVGRectElement>(null);
  const market2RectRef = useRef<SVGRectElement>(null);
  const petRectRef = useRef<SVGRectElement>(null);

  const market1Ref = useRef<HTMLElement>(null);
  const market2Ref = useRef<HTMLElement>(null);
  const petRef = useRef<HTMLElement>(null);

  const putElementsInPosition = useCallback(() => {
    const mapPosition = mapRef?.current?.getBoundingClientRect();
    const market1Position = market1RectRef?.current?.getBoundingClientRect();
    const market2Position = market2RectRef?.current?.getBoundingClientRect();
    const petPosition = petRectRef?.current?.getBoundingClientRect();

    setPosition(market1Ref?.current, mapPosition, market1Position);
    setPosition(market2Ref?.current, mapPosition, market2Position);
    setPosition(petRef?.current, mapPosition, petPosition);
  }, [mapRef, market1RectRef, market2RectRef, petRectRef]);

  function setPosition(
    reference: HTMLElement | null,
    start?: DOMRect,
    end?: DOMRect
  ) {
    if (!reference || (!start && !end)) return;

    reference.style.top = `${(end?.y ?? 0) - (start?.y ?? 0)}px`;
    reference.style.left = `${(end?.x ?? 0) - (start?.x ?? 0)}px`;
  }

  useEffect(() => {
    putElementsInPosition();
    window.addEventListener("resize", putElementsInPosition);
  }, [mapRef, market1Ref, market2Ref, petRef, putElementsInPosition]);

  return (
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
            Rua Itaperuna, 100 Santa Rosa - Pé Pequeno <br />
            Niterói - RJ, 24240-070
          </address>

          <nav className="localizacao__nav my-auto">
            <ButtonList.Root>
              <ButtonList.ListItem>
                <ButtonList.Button
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Shop} />} />
                  )}
                >
                  mercado
                </ButtonList.Button>
              </ButtonList.ListItem>
              <ButtonList.ListItem>
                <ButtonList.Button
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Pet} />} />
                  )}
                >
                  petshop
                </ButtonList.Button>
              </ButtonList.ListItem>
              <ButtonList.ListItem>
                <ButtonList.Button
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Bike} />} />
                  )}
                >
                  bicicletário
                </ButtonList.Button>
              </ButtonList.ListItem>
              <ButtonList.ListItem>
                <ButtonList.Button
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Park} />} />
                  )}
                >
                  parque
                </ButtonList.Button>
              </ButtonList.ListItem>
              <ButtonList.ListItem>
                <ButtonList.Button
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Bank} />} />
                  )}
                >
                  banco
                </ButtonList.Button>
              </ButtonList.ListItem>
              <ButtonList.ListItem>
                <ButtonList.Button
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Train} />} />
                  )}
                >
                  estação de metrô
                </ButtonList.Button>
              </ButtonList.ListItem>
            </ButtonList.Root>
          </nav>
        </div>
      </main>

      <aside className="localizacao__right">
        <MapView
          ref={mapRef}
          market1Ref={market1RectRef}
          market2Ref={market2RectRef}
          petRef={petRectRef}
          className="localizacao__banner"
        />

        <ButtonList.ButtonIcon
          ref={market1Ref}
          className="localizacao__right-floating_button market"
          Icon={() => <img src={Shop} />}
        />

        <ButtonList.ButtonIcon
          ref={market2Ref}
          className="localizacao__right-floating_button market"
          Icon={() => <img src={Shop} />}
        />

        <ButtonList.ButtonIcon
          ref={petRef}
          className="localizacao__right-floating_button pet"
          Icon={() => <img src={Pet} />}
        />
      </aside>
    </section>
  );
}
