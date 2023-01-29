import { test, expect } from "@jest/globals";
import z from "zod";
import is, { validate } from "../source/index.js";

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

