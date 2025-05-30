"use client";

import { useState, useRef } from "react";

export default function VisualMemory() {
  const [gap, setGap] = useState("gap-1 sm:gap-[12px]");
  const [colSize, setColSize] = useState("grid-cols-3");
  const [rowSize, setRowSize] = useState("grid-rows-3");
  const [gridList, setGridList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [isFlipped, setIsFlipped] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [gameStart, setGameStart] = useState(false);
  const [disableClick, setDisableClick] = useState(false);
  const [showSuccessResult, setShowSuccessResult] = useState(false);
  const [showFailResult, setShowFailResult] = useState(false);
  const [level, setLevel] = useState(1);

  const dataList = [
    {
      gap: "gap-1 sm:gap-[12px]",
      colSize: "grid-cols-3",
      rowSize: "grid-rows-3",
    },
    {
      gap: "gap-1 sm:gap-[8px]",
      colSize: "grid-cols-4",
      rowSize: "grid-rows-4",
    },
    {
      gap: "gap-1 sm:gap-[8px]",
      colSize: "grid-cols-5",
      rowSize: "grid-rows-5",
    },
    {
      gap: "gap-0.5 sm:gap-[4px]",
      colSize: "grid-cols-6",
      rowSize: "grid-rows-6",
    },
    {
      gap: "gap-0.5 sm:gap-[4px]",
      colSize: "grid-cols-7",
      rowSize: "grid-rows-7",
    },
  ];

  const flipSoundRef = useRef<HTMLAudioElement>(null);
  const playSound = () => {
    if (flipSoundRef.current) {
      flipSoundRef.current.currentTime = 0;
      flipSoundRef.current.play();
    }
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function addN(new_n: number) {
    const newGridList = [...gridList],
      newIsFlipped = [...isFlipped];
    for (let i = newGridList.length + 1; i <= new_n * new_n; i++) {
      newGridList.push(i);
      newIsFlipped.push(false);
    }
    setGridList(newGridList);
    setIsFlipped(newIsFlipped);
    await delay(500);

    setGap(dataList[new_n - 3].gap);
    setColSize(dataList[new_n - 3].colSize);
    setRowSize(dataList[new_n - 3].rowSize);
    await delay(500);
  }

  async function showAns(seq: boolean[]) {
    const oriSeq = [...isFlipped];
    setIsFlipped(seq);
    await delay(1000);
    setIsFlipped(oriSeq);
    await delay(200);
  }

  let n_cnt = 0; // number of blocks with the same n, add when n_cur ++
  let n_start = 3; // number of blocks when I start a new n, only add when n++
  let n_cur = 3; // number of blocks I need to flip this time

  let N = 3;
  let lvl = 1;
  const ansList = useRef<number[]>([]);

  async function runGame() {
    await delay(1000);

    while (true) {
      setDisableClick(true);

      n_cnt++;

      const blankAnsList: number[] = [];
      ansList.current = blankAnsList;

      const seq = new Array<number>();
      while (seq.length < n_cur) {
        const new_num = Math.floor(Math.random() * N * N); // 0 <= new_num <= (N*N)-1
        if (seq.indexOf(new_num) === -1) {
          seq.push(new_num);
        }
      }

      const questionSet = [...isFlipped];
      for (let i = 0; i < seq.length; i++) {
        questionSet[seq[i]] = true;
      }

      await showAns(questionSet);
      setDisableClick(false);

      // --- check ans ---
      let i = 0;
      let is_valid = true;

      const oriIsFlipped = [...isFlipped];

      while (ansList.current.length <= seq.length) {
        if (ansList.current.length > i) {
          if (seq.indexOf(ansList.current[i]) === -1) {
            is_valid = false;
            break;
          }
          i++;
          if (i === seq.length) {
            break;
          }
        }
        await delay(500);
      }

      if (!is_valid) {
        // you lose
        setShowFailResult(true);
        break;
      } else {
        // continue
        setShowSuccessResult(true);

        lvl++;
        setLevel(lvl);
        n_cur = n_cur + 1 > (N * N) / 2 ? Math.floor((N * N) / 2) : n_cur + 1;
        setIsFlipped(oriIsFlipped);
        await delay(1000);

        if (n_cnt == Math.pow(2, N - 2)) {
          N++;
          n_cnt = 0;
          n_start++;
          n_cur = n_start;
          await addN(N);
        }
        await delay(1000);
        setShowSuccessResult(false);
      }

      if (N == 6) {
        break;
      }

      // --- --- --- --- ---
    }
  }

  function flip(x: number) {
    const newIsFlipped = [...isFlipped];
    newIsFlipped[x] = true;
    setIsFlipped(newIsFlipped);
  }

  return (
    <div className="flex h-100 items-center justify-center">
      {disableClick && (
        <div className="absolute z-1 h-120 w-full opacity-0"></div>
      )}
      {showSuccessResult && (
        <div className="absolute z-1 mx-10 my-10 flex aspect-square w-5/6 max-w-110 flex-col items-center justify-center border-2 bg-white">
          <h1 className="text-xl font-bold sm:text-4xl">You got it!</h1>
          <h2 className="text-md sm:text-2xl">
            Let&apos;s jump into the next level!
          </h2>
        </div>
      )}
      {showFailResult && (
        <div className="absolute z-1 mx-10 my-10 flex aspect-square w-5/6 max-w-110 flex-col items-center justify-center border-2 bg-white">
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
            onClick={() => {
              setGameStart(true);
              runGame();
            }}
          >
            Start
          </button>
          <h1 className="sm:text-md text-sm">
            First, remember the squares that are flipped. Then, flip them back!
          </h1>
        </div>
      )}
      {gameStart && (
        <div className="mx-10 flex aspect-square w-full max-w-100 flex-col">
          <div className="flex justify-center">
            <h1 className="text-2xl">Level {level}</h1>
          </div>
          <div
            className={`grid aspect-square w-full ${colSize} ${rowSize} rounded-lg p-3 ${gap} sm:p-5`}
          >
            <audio preload="auto" src="/VisMemFlip/smallClick.mp3" ref={(el) => {if (el) flipSoundRef.current=el;}} />
            {gridList.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => {
                  playSound();
                  flip(item - 1);
                  const ans_list = [...ansList.current];
                  if (ans_list.indexOf(item - 1) === -1) {
                    ans_list.push(item - 1);
                  }
                  ansList.current = ans_list;
                }}
                className="rounded-lg perspective-[100rem]"
              >
                <div
                  className={`relative size-full transition duration-500 transform-3d ${isFlipped[item - 1] && "transform-[rotateX(180deg)]"}`}
                >
                  <div className="absolute inset-0 size-full backface-hidden">
                    <div className="size-full rounded-lg border-2 bg-white"></div>
                  </div>
                  <div className="absolute inset-0 size-full transform-[rotateX(180deg)] backface-hidden">
                    <div className="size-full rounded-lg bg-black"></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
