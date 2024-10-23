import { sum } from "../sum";

test("Sum function to sum two arguments", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
