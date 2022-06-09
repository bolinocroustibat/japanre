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
          Devine le <Japanre /> en 6 essais.
        </div>
        <div>Chaque essai doit être une préfecture valide du Japon parmi les 47 préfectures officielles du Japon.</div>
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
                name: "Oita",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre essai <span className="uppercase font-bold">Oita</span> est à{" "}
            {formatDistance(13_557_000, settingsData.distanceUnit)} de la préfecture
            cible, la préfecture cible se trouve dans la direction Nord-Est et vous
            avez une proximité de seulement 32% car votre essai est plutôt
            éloigné !
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Fukushima",
                direction: "S",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre second essai{" "}
            <span className="uppercase font-bold">Fukushima</span> est plus
            proche ! La bonne réponse est à{" "}
            {formatDistance(3_206_000, settingsData.distanceUnit)}, au Sud
            et la proximité est de 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Chiba",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Prochain essai, <span className="uppercase font-bold">Chiba</span>,
            c&apos;est la préfecture à deviner ! Bien joué !{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nouveau <Japanre /> sera disponible chaque jour !
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Une question ou suggestion ?</div>
        <div>
          Rendez-vous sur la{" "}
          <a
            className="underline"
            href="https://worldle.notion.site/Worldle-4005ca16fc9341e7be8adcfd30628146"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ Japanre
          </a>{" "}
          !
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Japanre /> a été <span className="font-bold">très</span> inspiré par{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worldle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          teufteuf (@teuteuf)
        </a>
        et par{" "}
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
          Fait par{" "}
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
              text="Offrez un café à teufteuf ! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
