import "@scss/localizacao/index.scss";

import { useCallback, useEffect, useState } from "react";
import { Divider } from "@/components/Divider";
import { ButtonList } from "@/components/ButtonList";
import { MapView } from "@/components/MapView";

import Bank from "@images/icons/icons8-bank-50.svg";
import Bike from "@images/icons/icons8-bicycle-50.svg";
import Park from "@images/icons/icons8-park-50.svg";
import Pet from "@images/icons/icons8-play-with-pet-50.svg";
import Shop from "@images/icons/icons8-shop-50.svg";
import Train from "@images/icons/icons8-train-50.svg";
import {
  TMapElementButton,
  TMapElements,
  setPosition,
  useMapRefs,
} from "@/components/MapView/Hooks";

export function Localizacao() {
  const [mapElements, setMapElements] = useState<TMapElementButton>(null);
  const { mapRefs, elementsRefs } = useMapRefs();

  const putElementsInPosition = useCallback(() => {
    for (const key in elementsRefs) {
      const htmlElement = elementsRefs[key as TMapElements];

      const mapElement = mapRefs[key as TMapElements] as
        | React.RefObject<SVGAElement>
        | undefined;

      if (!mapElement) continue;

      const start = mapRefs.map.current?.getBoundingClientRect();
      const end = mapElement.current?.getBoundingClientRect();

      setPosition(htmlElement.current as HTMLElement, start, end);
    }
  }, [mapRefs, elementsRefs]);

  useEffect(() => {
    putElementsInPosition();
    window.addEventListener("resize", putElementsInPosition);
  }, [mapRefs, mapRefs, putElementsInPosition]);

  return (
    <section id="localizacao">
      <div className="localizacao__content-wrapper">
        <div className="localizacao__header">
          <h3 className="h3 text-strong localizacao__title">Localização</h3>

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
                  onClick={() => setMapElements("market")}
                  isActive={mapElements === "market" || mapElements === null}
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Shop} />} />
                  )}
                >
                  mercado
                </ButtonList.Button>
              </ButtonList.ListItem>

              <ButtonList.ListItem>
                <ButtonList.Button
                  onClick={() => setMapElements("pet")}
                  isActive={mapElements === "pet" || mapElements === null}
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Pet} />} />
                  )}
                >
                  petshop
                </ButtonList.Button>
              </ButtonList.ListItem>

              <ButtonList.ListItem>
                <ButtonList.Button
                  isActive={mapElements === null}
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Bike} />} />
                  )}
                >
                  bicicletário
                </ButtonList.Button>
              </ButtonList.ListItem>

              <ButtonList.ListItem>
                <ButtonList.Button
                  isActive={mapElements === null}
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Park} />} />
                  )}
                >
                  parque
                </ButtonList.Button>
              </ButtonList.ListItem>

              <ButtonList.ListItem>
                <ButtonList.Button
                  isActive={mapElements === null}
                  Icon={() => (
                    <ButtonList.ButtonIcon Icon={() => <img src={Bank} />} />
                  )}
                >
                  banco
                </ButtonList.Button>
              </ButtonList.ListItem>

              <ButtonList.ListItem>
                <ButtonList.Button
                  isActive={mapElements === null}
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
      </div>

      <aside className="localizacao__right">
        <MapView
          ref={mapRefs.map}
          market1Ref={mapRefs.market1}
          market2Ref={mapRefs.market2}
          petRef={mapRefs.pet}
          className="localizacao__banner"
        />

        <ButtonList.ButtonIcon
          ref={elementsRefs.market1}
          className={`localizacao__right-floating_button ${
            mapElements === "market"
              ? "localizacao__right-floating_button--active"
              : ""
          }`}
          Icon={() => <img src={Shop} />}
        />

        <ButtonList.ButtonIcon
          ref={elementsRefs.market2}
          className={`localizacao__right-floating_button ${
            mapElements === "market"
              ? "localizacao__right-floating_button--active"
              : ""
          }`}
          Icon={() => <img src={Shop} />}
        />

        <ButtonList.ButtonIcon
          ref={elementsRefs.pet}
          className={`localizacao__right-floating_button ${
            mapElements === "pet"
              ? "localizacao__right-floating_button--active"
              : ""
          }`}
          Icon={() => <img src={Pet} />}
        />
      </aside>
    </section>
  );
}
