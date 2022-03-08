import { useEffect, useState } from "react";

interface IuseImageSwitcher {
  imageLength: number;
  duration?: number;
}

export const useImageSwitcher = ({
  imageLength,
  duration = 15000,
}: IuseImageSwitcher): number => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setIndex((pre) => (pre >= imageLength - 1 ? 0 : pre + 1));
    }, duration);

    return () => clearInterval(interval);
  }, [duration, imageLength]);

  return index;
};
