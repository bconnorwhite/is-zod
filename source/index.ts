import z from "zod";

export default function is<T>(value: unknown, schema: z.ZodSchema<T>): value is T {
  return schema.safeParse(value).success;
}

export function validate<T>(schema: z.ZodSchema<T>): ((value: unknown) => value is T) {
  return ((value: unknown) => is(value, schema)) as ((value: unknown) => value is T);
}
