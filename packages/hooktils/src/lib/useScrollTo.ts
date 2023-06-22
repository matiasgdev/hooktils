import { useCallback } from "react";
/**
 *
 * @param threshold margin after navigate
 * @param delay time before navigate into component
 * @returns (@param id element id) => void
 */

export function useScrollTo(threshold = 0, delay = 0) {
  const scroll = useCallback(
    (elementId: string) => {
      setTimeout(() => {
        const offsetTop = document.getElementById(elementId)?.offsetTop;

        if (typeof offsetTop === "undefined") {
          throw new Error(`Element with id ${elementId} was not founded.`);
        }

        if (window !== undefined && offsetTop !== undefined) {
          window.scrollTo({
            top: (offsetTop as number) - threshold,
            behavior: "smooth",
          });
        }
      }, delay);
    },
    [threshold, delay]
  );

  return scroll;
}
