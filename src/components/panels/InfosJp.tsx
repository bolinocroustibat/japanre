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

export function InfosJp({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="遊び方" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          6つの推測で
          <Japanre />
          を推測します。
        </div>
        <div>
          それぞれの推測は、47の公式の日本の都道府県の中で有効な都道府県でなければなりません。
        </div>
        <div>
          それぞれの推測の後、あなたはあなたの推測から目的の県までの距離、方向、そして近さを得るでしょう。
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">例</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "福島県",
                direction: "SW",
                distance: 538_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your guess <span className="uppercase font-bold">福島県</span> is{" "}
            {formatDistance(538000, settingsData.distanceUnit)} away from the
            target prefecture, the target prefecture is in the South-West
            direction with 76% proximity score because it&apos;s quite far away.
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "京都府",
                direction: "S",
                distance: 38_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your second guess{" "}
            <span className="uppercase font-bold">京都府</span> is getting
            closer! {formatDistance(38000, settingsData.distanceUnit)} away,{" "}
            South direction and 98% proximity.
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "奈良県",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess, <span className="uppercase font-bold">奈良県</span>, was
            the prefecture to guess! お疲れ様ですた!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        新しい
        <Japanre />
        が毎日利用可能になります！
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Japanre /> is a clone of{" "}
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
          teuteuf (@teuteuf)
        </a>{" "}
        which is itself heavily inspired by{" "}
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
          <Japanre /> adapted by{" "}
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
          Want to support Worldle?{" "}
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
