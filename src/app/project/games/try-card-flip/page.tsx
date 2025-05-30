"use client";

import { useState } from "react";

export default function TryCardFlip() {
  const Front = () => {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-white">
        Front
      </div>
    );
  };
  const Back = () => {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-black text-white">
        Back
      </div>
    );
  };

  const [showBack, setShowBack] = useState(false);
  function flip() {
    setShowBack(!showBack);
  }

  return (
    <button
      type="button"
      onClick={flip}
      className="size-50 outline-none perspective-[100rem]"
    >
      <div
        className={`relative size-full transition duration-500 transform-3d ${showBack && "transform-[rotateX(180deg)]"}`}
      >
        <div className="absolute inset-0 size-full backface-hidden">
          <Front />
        </div>
        <div className="absolute inset-0 size-full transform-[rotateX(180deg)] backface-hidden">
          <Back />
        </div>
      </div>
    </button>
  );
}

// <button type="button" onClick={flip} className="size-50 outline-none perspective-[200rem]">
//     <div className={`relative size-full transition duration-500 transform-3d ${showBack && 'transform-[rotateX(180deg)]'}`}>
//         <div className="absolute inset-0 size-full backface-hidden">
//             <Front/>
//         </div>
//         <div className="absolute inset-0 size-full backface-hidden transform-[rotateX(180deg)]">
//             <Back/>
//         </div>
//     </div>
// </button>
