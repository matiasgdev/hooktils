import { act, renderHook } from "@testing-library/react-hooks/dom";
import { useAsync } from "./useAsync";

describe("useAsync", () => {
  test("should return status correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsync(null));

    expect(result.current.status).toBe("idle");

    act(() => {
      result.current.run(new Promise((res) => setTimeout(res, 1000)));
    });

    expect(result.current.status).toBe("pending");

    await waitForNextUpdate();

    expect(result.current.status).toBe("resolved");
  });
});
