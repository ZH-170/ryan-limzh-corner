"use client";

import { useState, useRef } from "react";

export default function SequenceMemory() {
  const list_of_grids = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const [gameStart, setGameStart] = useState(false);
  const [level, setLevel] = useState(1);
  const [showSuccessResult, setShowSuccessResult] = useState(false);
  const [showFailResult, setShowFailResult] = useState(false);
  const [gridColor, setGridColor] = useState([
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
    "bg-white",
  ]);
  const [disableClick, setDisableClick] = useState(false);

  let n = 1;
  let seq: number[] = [];

  const ansList = useRef(seq);

  async function runGame() {
    n = 1;
    seq = [];

    while (true) {
      const new_n = Math.floor(Math.random() * 9);
      ansList.current = [];

      seq.push(new_n);

      setDisableClick(true);
      await showSeq(seq);
      setDisableClick(false);

      await delay(1000);

      let is_valid = true;
      let i = 0;

      while (ansList.current.length <= seq.length) {
        if (ansList.current.length > i) {
          if (ansList.current[i] !== seq[i]) {
            is_valid = false;
            break;
          }
          i++;
          if (i === seq.length) {
            break;
          }
        }
        await delay(100);
      }

      if (!is_valid) {
        setShowFailResult(true);
        break;
      } else {
        n++;
        setLevel(n);
        setShowSuccessResult(true);

        await delay(2000);
        setShowSuccessResult(false);
      }
    }
  }

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function showSeq(seq: number[]) {
    // await delay(500);
    for (let i = 0; i < seq.length; i++) {
      const newGridColor = [...gridColor];
      const preGridColor = [...gridColor];

      newGridColor[seq[i]] = "bg-black";

      await delay(300);
      setGridColor(newGridColor);

      await delay(300);
      setGridColor(preGridColor);
    }
  }

  return (
    <div className="flex h-100 items-center justify-center">
      {disableClick && <div className="absolute h-120 w-full opacity-0"></div>}
      {showSuccessResult && (
        <div className="absolute mx-10 my-10 flex aspect-square w-4/5 max-w-110 flex-col items-center justify-center border-2 bg-white">
          <h1 className="text-xl font-bold sm:text-4xl">You got it!</h1>
          <h2 className="text-md sm:text-2xl">
            Let&apos;s jump into the next level!
          </h2>
        </div>
      )}
      {showFailResult && (
        <div className="absolute mx-10 my-10 flex aspect-square w-4/5 max-w-110 flex-col items-center justify-center border-2 bg-white">
          <h1 className="text-xl font-bold sm:text-4xl">
            You are almost there!
          </h1>
          <h2 className="text-md sm:text-2xl">
            Your highest level: Level {level}
          </h2>
          <button
            onClick={() => window.location.reload()}
            className="m-3 rounded-lg border-2 p-2 active:border-4"
          >
            Try Again!
          </button>
        </div>
      )}
      {!gameStart && (
        <div className="m-10 flex flex-col items-center justify-center gap-3">
          <button
            className="w-20 rounded-2xl border-2 px-5 py-3 focus:border-4"
            onClick={async () => {
              setGameStart(true);
              runGame();
            }}
          >
            Start
          </button>
          <h1 className="sm:text-md text-sm">
            First, memorize the sequence of the blocks &quot;glow&quot; in.
            Then, click the box with the correct sequence.
          </h1>
        </div>
      )}

      {gameStart && (
        <div className="mx-10 flex aspect-square w-full max-w-100 flex-col">
          <div className="flex justify-center">
            <h1 className="text-2xl">Level {level}</h1>
          </div>
          <div className="grid aspect-square w-full grid-cols-3 grid-rows-3 gap-1 rounded-lg p-3 sm:gap-3 sm:p-5">
            {list_of_grids.map((item) => (
              <div
                className={`${gridColor[item]} rounded-lg border-2 transition delay-10 ease-in-out active:bg-[#000000]`}
                onClick={() => {
                  const ans_list = [...ansList.current, item];
                  ansList.current = ans_list;
                }}
                key={item}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
