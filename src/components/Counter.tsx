import { useState } from "react";

import cls from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className={cls.h1}>{counter}</h1>
      <button
        className={cls.btn}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        increase
      </button>
      <button
        className={cls.btn}
        onClick={() => setCounter((prev) => prev - 1)}
      >
        decrease
      </button>
    </div>
  );
};
