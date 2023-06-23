import { renderHook } from "@testing-library/react-hooks/dom";
import { useScrollTo } from "./useScrollTo";

jest.useFakeTimers();
describe("useScrollTo", () => {
  test("should throw error if not element was founded", () => {
    const { result } = renderHook(useScrollTo);
    return expect(() => {
      result.current("invalid");
      jest.advanceTimersByTime(0);
    }).toThrowError();
  });
});
