import { z } from "zod";
import { expect, test } from "vitest";
import is, { validate } from "../src/index.js";

const user = z.object({
  name: z.string(),
  age: z.number()
});

const value = { name: "John", age: 42 };

test("is", () => {
  expect(is(value, user)).toBe(true);
});

test("validate", () => {
  const isUser = validate(user);
  expect(isUser(value)).toBe(true);
});
