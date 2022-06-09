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

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Guess the <Japanre /> in 6 guesses.
        </div>
        <div>
          Each guess must be a valid prefecture of Japan among the 47 official
          Japanese prefectures.
        </div>
        <div>
          After each guess, you will have the distance, the direction and the
          proximity from your guess and the target prefecture.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
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
            Your guess <span className="uppercase font-bold">Oita</span> is{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} away from the
            target prefecture, the target prefecture is in the North-East
            direction and you have a only 32% of proximitybecause it&apos;s
            quite far away!
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
            Your second guess{" "}
            <span className="uppercase font-bold">Fukushima</span> is getting
            closer! {formatDistance(3206000, settingsData.distanceUnit)} away,
            South direction and 84%!
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
            Next guess, <span className="uppercase font-bold">Chiba</span>,
            it&apos;s the prefecture to guess! Congrats!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Japanre /> will be available every day!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Japanre /> has been <span className="font-bold">heavily</span> inspired
        by{" "}
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
        </a>{" "}
        and by{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Made by{" "}
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
            source code
          </a>
          )
        </div>
        <div>
          Want to support?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Buy teuteuf a coffee! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
