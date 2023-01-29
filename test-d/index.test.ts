import { expectType } from "tsd";
import { z } from "zod";
import is, { validate } from "../source/index.js";

const user = z.object({
  name: z.string(),
  age: z.number()
});

const value = { name: "John", age: 42 };

if(is(value, user)) {
  expectType<z.infer<typeof user>>(value);
}

const isUser = validate(user);

if(isUser(value)) {
  expectType<z.infer<typeof user>>(value);
}
