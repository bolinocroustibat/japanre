import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Japanre } from "../Japanre";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosFr({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Comment jouer" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          {" "}
          Devinez le <Japanre /> en 6 essais.
        </div>
        <div>
          Chaque essai doit être une préfecture japonaise valide parmi les 47
          préfectures officielles du Japon.
        </div>
        <div>
          Après chaque essai, vous aurez la distance, la direction et la
          proximité entre votre essai et la préfecture cible.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Exemples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Fukushima",
                direction: "SW",
                distance: 538_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre essai <span className="uppercase font-bold">Fukushima</span>{" "}
            est à {formatDistance(538_000, settingsData.distanceUnit)} de la
            préfecture cible, la préfecture cible se trouve dans la direction
            sud-ouest avec un score de proximité de 78% car votre essai est
            plutôt éloigné.
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Kyoto",
                direction: "S",
                distance: 38_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre second essai{" "}
            <span className="uppercase font-bold">Kyoto</span> est plus proche.
            La bonne réponse est à{" "}
            {formatDistance(38_000, settingsData.distanceUnit)} au sud et la
            proximité est de 98%.
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Nara",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Prochain essai, <span className="uppercase font-bold">Nara</span>,
            c&apos;est la préfecture à deviner ! Bien joué ! 🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nouveau <Japanre /> sera disponible chaque jour !
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Japanre /> est un clone de{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>{" "}
        créé par{" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          teuteuf (@teuteuf)
        </a>{" "}
        , lui-même très inspiré de{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        créé par{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          <Japanre /> adapté par{" "}
          <a
            className="underline"
            href="https://twitter.com/bolinocrousti"
            target="_blank"
            rel="noopener noreferrer"
          >
            bolino (@bolinocrousti)
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/bolinocroustibat/japanre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            code source
          </a>
          )
        </div>
        <div>
          Vous voulez soutenir le créateur original de Worldle ?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Offrez un café à teuteuf ! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
